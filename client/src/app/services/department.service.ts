import { Injectable } from "@angular/core";
import { CoreService } from "../services/core.service";
import { Observable } from "rxjs";
import { Department } from "../models/Department.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class DepartmentService {
  private apiUrl = "api/departments";
  constructor(private coreService: CoreService) {}

  getDepartments(): Observable<Department[]> {
    return this.coreService.getData<any>(this.apiUrl).pipe(map((e)=>e.departments));
  }
}
