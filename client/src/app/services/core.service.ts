import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http/";
import { Observable } from "rxjs";
import { map, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CoreService {
  private host: string = "http://localhost:4100/";
  constructor(private http: HttpClient) {}

  getData<T>(apiURL: string): Observable<T> {
    return this.http.get<T>(`${this.host}${apiURL}`);
  }

  postData<T>(data: any, apiURL: string, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(`${this.host}${apiURL}`, data, { headers });
  }

  putData<T>(data, apiURL: string): Observable<T> {
    return this.http.put<T>(`${this.host}${apiURL}`, data);
  }

  deleteData<T>(id, apiURL: string): Observable<T> {
    const httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      body: { id },
    };
    return this.http.delete<T>(`${this.host}${apiURL}`, httpOptions);
  }
}
