import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { CoreService } from "./core.service";
import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { NotificationService } from "./notification.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  public userStatus: string;
  public userStatusChanges: BehaviorSubject<string> = new BehaviorSubject<
    string
  >("");
  private apiUrl = "api/auth/login/";

  constructor(
    private coreService: CoreService,
    private router: Router,
    private notifyService: NotificationService,
    private jwtService: JwtHelperService
  ) {}

  setUserStatus(userStatus: any): void {
    this.userStatus = userStatus;
    this.userStatusChanges.next(userStatus);
  }

  login(
    redirectUrl: string,
    formData: { emailAddress: string; password: string; userType?: string },
    onComplete: () => void
  ) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    // send a post request
    this.coreService
      .postData<IFeedBack>(formData, this.apiUrl, headers)
      .subscribe(
        (res) => {
          if (res.success) {
            localStorage.setItem("access_token", res["token"]);
            this.setUserStatus(res["token"]);
            this.router.navigate([redirectUrl]);
          } else {
            this.notifyService.showWarning(res.message, "Operation failed");
          }
        },
        (reason) => {
          this.notifyService.showError(
            "Wrong email and password combination",
            "Operation failed"
          );
          onComplete();
        },
        () => {
          onComplete();
        }
      );
  }

  logout() {
    // just remove the access token and redirect
    console.log("user logged out successfully");
    localStorage.removeItem("access_token");
    this.setUserStatus(null);
    this.router.navigate(["/login"]);
  }

  public getUserType(): string {
    let decoded = this.jwtService.decodeToken(this.userStatus);
    if (decoded) {
      return decoded["type"];
    }

    return null;
  }

  public getStatusOnRefresh() {
    if (localStorage.getItem("access_token")) {
      let token = localStorage.getItem("access_token");
      let decoded = this.jwtService.decodeToken(token);
      if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
        this.logout();
      }
      this.setUserStatus(localStorage.getItem("access_token"));
    }
  }

  public getCurrentUser() {
    return this.coreService.getData<any>("api/currentuser");
  }
}
