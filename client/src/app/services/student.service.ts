import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";
import { Student } from "../models/Student.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class StudentService {
  private apiUrl = "api/students";
  constructor(private coreService: CoreService) {}

  registerStudent(student: Student): Observable<IFeedBack> {
    return this.coreService.postData<IFeedBack>(student, this.apiUrl);
  }

  getStudents(search?: string): Observable<Student[]> {
    search = search || "";
    return this.coreService
      .getData<any>(this.apiUrl + "?searchquery=" + search)
      .pipe(map((d) => d.students));
  }
  updateStudent(student: Student): Observable<IFeedBack> {
    return this.coreService.putData(student, this.apiUrl);
  }

  changePassword(passwordUpdate: {
    password: string;
    id: number;
  }): Observable<IFeedBack> {
    return this.coreService.postData(
      passwordUpdate,
      this.apiUrl + "/changepassword/"
    );
  }
}
