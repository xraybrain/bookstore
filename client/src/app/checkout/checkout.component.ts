import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Cart } from "../models/Cart.model";
import { AuthService } from "../services/auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { OrderService } from "../services/order.service";
import { NotificationService } from "../services/notification.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.css"],
})
export class CheckoutComponent implements OnInit {
  private cart: Cart[];
  private totalPrice: number;
  private currentUser: any;
  private reference: string;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private jwtService: JwtHelperService,
    private orderService: OrderService,
    private notifyService: NotificationService,
    private router: Router
  ) {
    this.currentUser = {};
  }
  private calculateTotalPrice() {
    this.totalPrice = this.cart.reduce(
      (acc, cart) => acc + Number(cart["Book"]["price"]),
      0
    );
  }

  ngOnInit() {
    let id;
    this.authService.getStatusOnRefresh();
    let decoded = this.jwtService.decodeToken(this.authService.userStatus);
    if (decoded) {
      id = decoded["user"];
      this.cartService.getCartItems(id).subscribe((cart) => {
        this.cart = cart;
        this.calculateTotalPrice();
      });
    }

    this.authService.getCurrentUser().subscribe(
      (res) => {
        console.log(res);
        if (res.success) {
          this.currentUser = res.user;
        }
      },
      (reason) => {
        console.log(reason);
      }
    );
    this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
  }

  paymentCancel() {
    console.log("canceled");
  }

  paymentDone(paymentInfo: any) {
    
    let orderData = {
      studentId: this.currentUser.id,
      paymentRef: paymentInfo["reference"],
    };
    this.orderService.saveOrder(orderData).subscribe(
      (res) => {
        console.log(res);
        if (res.success) {
          this.notifyService.showSuccess(
            "Your order was successful, please always check your order page to see the status.",
            "Success"
          );
          this.router.navigate(["/books/"]);
          this.cartService.refreshTotalItems();
        } else {
          this.notifyService.showError(
            "We encountered a problem while creating your request.",
            "Operation Failed"
          );
        }
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to process your request.",
          "Operation Failed"
        );
      }
    );
  }
}
