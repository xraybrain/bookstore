import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";
import { Observable } from "rxjs";
import { Book } from "../models/Book.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BookService {
  private apiUrl: string = "api/books/";
  constructor(private coreService: CoreService) {}

  saveBook(newBook: Book): Observable<any> {
    return this.coreService.postData<any>(newBook, this.apiUrl);
  }

  getBooks(
    lecturerId: any = "",
    limit = 0,
    searchquery = "",
  ): Observable<Book[]> {
    return this.coreService
      .getData<any>(`${this.apiUrl}?lid=${lecturerId}&limit=${limit}&searchquery=${searchquery}`)
      .pipe(map((d) => d.books));
  }

  getBook(bookId: number): Observable<Book> {
    return this.coreService
      .getData<any>(`${this.apiUrl}${bookId}/`)
      .pipe(map((d) => d.book));
  }

  updateBook(book: Book): Observable<any> {
    return this.coreService.putData<any>(book, this.apiUrl);
  }

  deleteBook(id: number): Observable<any> {
    return this.coreService.deleteData<any>(id, this.apiUrl);
  }
}
