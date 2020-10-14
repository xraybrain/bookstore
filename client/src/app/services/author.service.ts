import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";
import { Observable } from "rxjs";
import { Author } from "../models/Author.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthorService {
  private apiUrl = "api/authors";
  constructor(private coreService: CoreService) {}

  getAuthors(): Observable<Author[]> {
    return this.coreService
      .getData<any>(this.apiUrl)
      .pipe(map((e) => e.authors));
  }

  saveAuthor(newAuthor: { name: string }): Observable<any> {
    return this.coreService.postData<any>(newAuthor, this.apiUrl);
  }

  updateAuthor(author: Author): Observable<any> {
    return this.coreService.putData<any>(author, this.apiUrl);
  }

  deleteAuthor(id: number): Observable<any>{
    return this.coreService.deleteData<any>(id, this.apiUrl);
  }
}
