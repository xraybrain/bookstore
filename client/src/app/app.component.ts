import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { CartService } from "./services/cart.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "Online Bookshop";
  private userStatus: string;
  private totalCartItems: number;
  private userType: string;

  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.authService.userStatusChanges.subscribe((x) => (this.userStatus = x));
    this.cartService.totalItemsChanges.subscribe(
      (x) => (this.totalCartItems = x)
    );
    this.cartService.refreshTotalItems();
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.authService.getStatusOnRefresh();
    this.userType = this.authService.getUserType();
  }

  logOut() {
    this.authService.logout();
    this.cartService.refreshTotalItems();
  }
}
