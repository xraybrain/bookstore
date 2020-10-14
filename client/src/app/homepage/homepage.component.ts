import { Component, OnInit } from "@angular/core";
import { Book } from "../models/Book.model";
import { BookService } from "../services/book.service";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"],
})
export class HomepageComponent implements OnInit {
  private books: Book[];
  constructor(
    private bookService: BookService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.bookService.getBooks("", 4).subscribe(
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
}
