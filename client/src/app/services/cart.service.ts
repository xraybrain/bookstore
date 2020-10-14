import { Injectable, OnInit } from "@angular/core";
import { CoreService } from "./core.service";
import { Observable, BehaviorSubject } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Cart } from "../models/Cart.model";

@Injectable({
  providedIn: "root",
})
export class CartService implements OnInit {
  private apiUrl: string = "api/cart/";
  public totalItems: number;
  private userStatus: string;
  public totalItemsChanges: BehaviorSubject<number> = new BehaviorSubject<
    number
  >(0);

  constructor(
    private coreService: CoreService,
    private authService: AuthService,
    private jwtService: JwtHelperService
  ) {}
  ngOnInit() {
    this.authService.userStatusChanges.subscribe((x) => (this.userStatus = x));
  }
  saveToCart(cartItem: {
    studentId: number;
    bookId: number;
    quantity: number;
  }): Observable<IFeedBack> {
    return this.coreService.postData<IFeedBack>(cartItem, this.apiUrl);
  }

  getCartItems(studentId: number): Observable<Cart[]> {
    return this.coreService
      .getData<Cart[]>(`${this.apiUrl}?sid=${studentId}`)
      .pipe(map((d) => d["cart"]));
  }

  deleteCartItem(id: number): Observable<IFeedBack> {
    return this.coreService.deleteData(id, this.apiUrl);
  }

  setTotalItems(totalItems: number) {
    this.totalItems = totalItems;
    this.totalItemsChanges.next(totalItems);
  }

  refreshTotalItems() {
    let decoded = this.jwtService.decodeToken(this.userStatus);
    let id;
    if (decoded) {
      if (decoded["type"] !== "Student") return;
      id = decoded["user"];
    } else {
      return;
    }

    this.coreService
      .getData<any>(`${this.apiUrl}total/?sid=${id}`)
      .pipe(debounceTime(5000))
      .subscribe((res) => {
        this.setTotalItems(res["totalItems"]);
      });
  }
}
