import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";
import { Lecturer } from "../models/Lecturer.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LecturerService {
  private apiUrl = "api/lecturers";
  constructor(private coreService: CoreService) {}

  registerLecturer(lecturer: Lecturer) {
    return this.coreService.postData<IFeedBack>(lecturer, this.apiUrl);
  }

  getLecturers(searchquery: string = ""): Observable<Lecturer[]> {
    return this.coreService
      .getData<any>(this.apiUrl + "?searchquery=" + searchquery)
      .pipe(map((e) => e.lecturers));
  }

  updateLecturer(lecturer: Lecturer) {
    return this.coreService.putData<IFeedBack>(lecturer, this.apiUrl);
  }

  changePassword(updatePassword: {
    password: string;
    id: number;
  }): Observable<IFeedBack> {
    return this.coreService.postData(
      updatePassword,
      this.apiUrl + "/changepassword/"
    );
  }
}
