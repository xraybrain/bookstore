import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Book } from "src/app/models/Book.model";
import { AuthService } from "src/app/services/auth.service";
import { BookService } from "src/app/services/book.service";

@Component({
  selector: "app-lecturer-books",
  templateUrl: "./lecturer-books.component.html",
  styleUrls: ["./lecturer-books.component.css"],
})
export class LecturerBooksComponent implements OnInit {
  private books: Book[] = [];
  private userStatus: string;
  private lecturerId: number;

  constructor(
    private bookService: BookService,
    private authService: AuthService,
    private jwtService: JwtHelperService
  ) {}

  ngOnInit() {
    this.authService.userStatusChanges.subscribe((x) => (this.userStatus = x));
    let decoded = this.jwtService.decodeToken(this.userStatus);
    this.lecturerId = decoded["user"];

    this.bookService.getBooks(this.lecturerId).subscribe(
      (books) => {
        this.books = books;
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
}
