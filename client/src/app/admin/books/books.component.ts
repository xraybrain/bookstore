import { Component, OnInit } from "@angular/core";
import { ImageSnippet } from "../../models/ImageSnippet";
import { Book } from "../../models/Book.model";
import { Author } from "src/app/models/Author.model";
import { AuthorService } from "../../services/author.service";
import { Lecturer } from "src/app/models/Lecturer.model";
import { LecturerService } from "src/app/services/lecturer.service";
import { BookService } from "src/app/services/book.service";
import { ViewChild } from "@angular/core";
import { NotificationService } from "src/app/services/notification.service";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { BaseModalComponent } from "../../base-modal/base-modal.component";
import { EditBookModalComponent } from "../edit-book-modal/edit-book-modal.component";
import { WarningDialogComponent } from "src/app/warning-dialog/warning-dialog.component";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent implements OnInit {
  selectedFile: ImageSnippet;
  newBook: Book;
  authorList: Author[] = [];
  selectedAuthors: Author[] = [];
  newAuthor = {};
  isSendingRequest = false;
  errorMsgOnSaveAuthor: string;
  editAuthor: Author;
  selectedAuthorId: number = 0;
  actionStatus: string;
  lecturerList: Lecturer[] = [];
  books: Book[];

  @ViewChild("newBookModal", { static: false }) modalClose;

  constructor(
    private authorService: AuthorService,
    private lecturerService: LecturerService,
    private bookService: BookService,
    private notifyService: NotificationService,
    private modalService: NgbModal
  ) {
    this.newBook = new Book(null, null, "", "", true, null, "", []);
    this.newAuthor = { name: "" };
    this.editAuthor = { name: "", id: 0 };
    this.selectedFile = { pending: false, src: "", status: "" };
  }

  ngOnInit() {
    //get book authors
    this.authorService.getAuthors().subscribe((authors) => {
      this.authorList = authors;
    });

    // get leturers
    this.lecturerService.getLecturers().subscribe(
      (lecturers) => {
        this.lecturerList = lecturers;
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to contact server.",
          "Operation failed"
        );
      }
    );

    this.loadBooks();
  }

  loadBooks() {
    // get books
    this.bookService.getBooks().subscribe(
      (books) => {
        console.log(books);
        this.books = books;
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to contact server.",
          "Operation failed"
        );
      }
    );
  }

  addAuthor(author: Author) {
    console.log(author);
    if (author.id) {
      let found = this.selectedAuthors.find((a) => a.id === author.id);
      if (found === undefined) {
        this.selectedAuthors.push(author);
      }
    }
  }

  deleteAuthor(index: number) {
    delete this.selectedAuthors[index];
    this.selectedAuthors = this.selectedAuthors.filter((e) => e !== undefined);
  }
  onFileChanged(imageInput) {
    let file: File = imageInput.files[0];
    let reader: FileReader = new FileReader();

    reader.addEventListener("load", (event) => {
      this.selectedFile = new ImageSnippet(event.target["result"], file);
      this.newBook.coverPage = this.selectedFile.src;
    });
    reader.readAsDataURL(file);
  }

  onSubmitNewAuthor(newAuthor) {
    if (this.isSendingRequest) return;
    this.isSendingRequest = true;
    this.authorService.saveAuthor(newAuthor).subscribe((result) => {
      this.isSendingRequest = false;
      if (result.success) {
        this.newAuthor = { name: "" };
        this.authorList.push(result.author);
      } else {
        this.errorMsgOnSaveAuthor = result.message;
      }
    });
  }

  initAuthorEdit(author: Author) {
    this.editAuthor = author;
  }

  onUpdateAuthor(author: Author) {
    if (this.isSendingRequest) return;
    this.isSendingRequest = true;
    this.authorService.updateAuthor(author).subscribe((result) => {
      this.isSendingRequest = false;
      if (result.success) {
        console.log(result);
        let i = this.authorList.findIndex((a) => author.id == a.id);
        this.authorList[i] = result.author;
      } else {
        this.errorMsgOnSaveAuthor = result.message;
      }
    });
  }

  initAuthorDelete(id: number) {
    this.selectedAuthorId = Number(id);
    this.actionStatus = "";
  }

  onDeleteAuthor() {
    if (this.isSendingRequest) return;
    if (this.selectedAuthorId == 0) return;
    this.isSendingRequest = true;

    this.authorService
      .deleteAuthor(this.selectedAuthorId)
      .subscribe((result) => {
        this.authorList = this.authorList.filter(
          (a) => a.id !== this.selectedAuthorId
        );
        this.isSendingRequest = false;
        this.actionStatus = result.message;
        this.selectedAuthorId = 0;
        console.log(result);
      });
  }

  onSubmitNewBook() {
    if (this.selectedAuthors.length > 0) {
      this.newBook.authors = [];
      this.newBook.authors = this.selectedAuthors.map((a) => a.id);
    }
    this.bookService.saveBook(this.newBook).subscribe(
      (response) => {
        this.modalClose.nativeElement.click();
        this.notifyService.showSuccess(
          "Book has been saved successfully",
          "Success"
        );
        this.loadBooks();
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to contact the server.",
          "Operation Failed"
        );
      }
    );
  }

  open(book: Book) {
    const modalRef = this.modalService.open(EditBookModalComponent);
    modalRef.componentInstance.editBook = book;
    modalRef.componentInstance.title = "Edit Book";
    modalRef.result
      .then((action) => {
        console.log(action);
      })
      .catch(() => {});
  }

  onDeleteBook(bookId: number) {
    const modalRef = this.modalService.open(WarningDialogComponent);
    modalRef.componentInstance.title = "Delete Warning";
    modalRef.componentInstance.message =
      "Are you sure you want to delete this book?";
    modalRef.result
      .then((action) => {
        console.log(action);
        if (action == "continue") {
          this.bookService.deleteBook(bookId).subscribe(
            (response) => {
              if (response.success) {
                this.notifyService.showSuccess(
                  "book has been deleted successfully",
                  "Success"
                );
                let index = this.books.findIndex((b) => b.id == bookId);
                if (index) {
                  this.books.splice(index, 1);
                }
              } else {
                this.notifyService.showError(
                  "Server was unable to process request",
                  "Operation failed"
                );
              }
            },
            (reason) => {
              console.log(reason);
              this.notifyService.showError(
                "We encountered an errror while contacting server",
                "Operation failed"
              );
            }
          );
        }
      })
      .catch((reason) => {
        console.log(reason);
      });
  }
}
