import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Book } from "../models/Book.model";
import { BookService } from "../services/book.service";
import { NotificationService } from "../services/notification.service";
import { CartService } from "../services/cart.service";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "../services/auth.service";
@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent implements OnInit {
  private book: Book;
  private bookId: number;
  private userStatus: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private notifyService: NotificationService,
    private cartService: CartService,
    private jwtService: JwtHelperService,
    private authService: AuthService
  ) {
    console.log();
  }

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params.id;
    this.bookService.getBook(this.bookId).subscribe(
      (book) => {
        this.book = book;
        console.log(book);
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We we unable to contact server",
          "Operation failed"
        );
      }
    );

    this.authService.userStatusChanges.subscribe((x) => (this.userStatus = x));
  }

  onAddToCart() {
    let formData = {
      bookId: this.bookId,
      quantity: 1,
      studentId: null,
    };

    let decoded = this.jwtService.decodeToken(this.userStatus);
    if (!decoded) {
      return this.notifyService.showError(
        "You must login before you can start adding items to cart",
        "Operation failed"
      );
    }
    if (Math.floor(Date.now() / 1000) > decoded["exp"]) {
      return this.notifyService.showError(
        "Your token has expired login again",
        "Operation failed"
      );
    }
    if (decoded["type"] !== "Student") {
      this.notifyService.showWarning(
        "Only students can add items to cart.",
        "Warning"
      );
      return;
    }
    formData.studentId = decoded["user"];
    this.cartService.saveToCart(formData).subscribe(
      (res) => {
        if (res.success) {
          this.notifyService.showSuccess(
            "book has been added to cart",
            "Success"
          );
          this.cartService.refreshTotalItems();
        } else {
          this.notifyService.showWarning(res.message, "Warning");
        }
        console.log(res);
      },
      (reason) => {
        console.log(reason);
        return this.notifyService.showError(
          "We were unable to add your item to cart, try again",
          "Operation failed"
        );
      }
    );
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.authService.getStatusOnRefresh();
  }
}
