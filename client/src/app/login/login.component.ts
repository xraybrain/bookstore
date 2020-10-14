import { Component, OnInit } from "@angular/core";
import { StudentService } from "../services/student.service";
import { AuthService } from "../services/auth.service";
import { CartService } from "../services/cart.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  private isContactingServer: boolean;
  constructor(
    private authService: AuthService,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  model = { emailAddress: "", password: "", userType: "student" };

  login() {
    this.isContactingServer = true;
    let redirectUrl;
    switch (this.model.userType) {
      case "admin":
        redirectUrl = "/admin/dashboard/";
        break;
      case "lecturer":
        redirectUrl = "/lecturer/books";
        break;
      default:
        redirectUrl = "/books";
    }
    this.authService.login(redirectUrl, this.model, () => {
      this.cartService.refreshTotalItems();
      this.isContactingServer = false;
    });
  }
}
