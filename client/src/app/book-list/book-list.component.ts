import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../models/Book.model";
import { BookService } from "../services/book.service";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-book-list",
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
})
export class BookListComponent implements OnInit {
  constructor() {}

  @Input()
  books: Book[];

  ngOnInit() {}
}
