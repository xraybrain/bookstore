import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CoreService } from "./core.service";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  private apiUrl = "api/admins/";
  constructor(private coreService: CoreService) {}

  getDashboardSummary(): Observable<IFeedBack> {
    return this.coreService.getData(`${this.apiUrl}dashboard/summary`);
  }
  getNotifications(): Observable<IFeedBack> {
    return this.coreService.getData(`${this.apiUrl}notifications`);
  }

  deleteNotification(id: number): Observable<IFeedBack> {
    return this.coreService.deleteData(id, `${this.apiUrl}notification`);
  }
}
