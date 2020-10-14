import { Component, OnInit } from "@angular/core";
import { Book } from "../models/Book.model";
import { BookService } from "../services/book.service";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  private books: Book[];
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks(searchquery = "") {
    this.bookService.getBooks("", null, searchquery).subscribe(
      (books) => {
        this.books = books;
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to contact server.",
          "Operation Failed"
        );
      }
    );
  }

  model = { searchquery: "" };

  onSubmit() {
    this.loadBooks(this.model.searchquery);
  }
}
