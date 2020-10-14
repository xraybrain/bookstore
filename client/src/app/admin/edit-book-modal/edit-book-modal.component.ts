import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Book } from "src/app/models/Book.model";
import { BookService } from "src/app/services/book.service";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "app-edit-book-modal",
  templateUrl: "./edit-book-modal.component.html",
  styleUrls: ["./edit-book-modal.component.css"],
})
export class EditBookModalComponent implements OnInit {
  public editBook: Book;

  constructor(
    public activeModal: NgbActiveModal,
    private bookService: BookService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {}

  onUpdateBook(book: Book) {
    this.bookService.updateBook(book).subscribe(
      (response) => {
        this.activeModal.close();
        if (response.success) {
          this.notifyService.showSuccess(
            "Book has been updated successfully",
            "Success"
          );
        } else {
          this.notifyService.showError(
            "Server was unable to process request try again",
            "Operation failed"
          );
        }
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "Server was unable to process request try again",
          "Operation failed"
        );
      }
    );
  }
}
