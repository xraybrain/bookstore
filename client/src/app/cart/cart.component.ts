import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "../services/auth.service";
import { Cart } from "../models/Cart.model";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { WarningDialogComponent } from "../warning-dialog/warning-dialog.component";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  private userStatus: string;
  private cart: Cart[];
  private totalPrice: number;
  private totalItems: number;

  constructor(
    private cartService: CartService,
    private jwtService: JwtHelperService,
    private authService: AuthService,
    private modalService: NgbModal,
    private notifyService: NotificationService
  ) {}
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
        this.totalItems = cart.length;
        this.calculateTotalPrice();
      });
    }
  }

  onDelete(id: number) {
    console.log(id);
    let modalRef = this.modalService.open(WarningDialogComponent);
    modalRef.componentInstance.title = "Warning";
    modalRef.componentInstance.message =
      "Are you sure you want to remove this item from Cart?";
    modalRef.result
      .then((action) => {
        if (action === "continue") {
          this.cartService.deleteCartItem(id).subscribe(
            (res) => {
              if (res.success) {
                this.notifyService.showSuccess(
                  "book has been removed from cart",
                  "Success"
                );
                let index = this.cart.findIndex((item) => item.id == id);
                if (index !== -1) this.cart.splice(index, 1);
                this.cartService.refreshTotalItems();
                this.calculateTotalPrice();
                this.totalItems = this.cart.length;
              } else {
                this.notifyService.showError(res.message, "Operation Failed");
              }
            },
            (reason) => {
              this.notifyService.showError(
                "We were unable to remove item from cart",
                "Operation Failed"
              );
            }
          );
        }
      })
      .catch((reason) => {});
  }
}
