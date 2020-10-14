import { Component, OnInit } from "@angular/core";
import { Lecturer } from "src/app/models/Lecturer.model";
import { AdminService } from "src/app/services/admin.service";
import { LecturerService } from "src/app/services/lecturer.service";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.css"],
})
export class AdminDashboardComponent implements OnInit {
  private summary: {
    totalStudents: number;
    totalLecturers: number;
    totalPayments: number;
    totalBooks: number;
  };

  private notifications = [];
  private unActivatedAccounts: Lecturer[] = [];
  constructor(
    private adminService: AdminService,
    private lecturerService: LecturerService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.adminService.getDashboardSummary().subscribe((res) => {
      if (res.success) {
        this.summary = res.data;
      }
    });

    this.adminService.getNotifications().subscribe((res) => {
      if (res.success) {
        this.notifications = res.data;
      }
    });

    this.lecturerService.getLecturers("0").subscribe((res) => {
      this.unActivatedAccounts = res;
      console.log(res);
    });
  }

  deleteNotification(id: number) {
    this.adminService.deleteNotification(id).subscribe(
      (res) => {
        this.notifications.splice(
          this.notifications.findIndex((a) => a.id == id),
          1
        );
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  onActivate(account: Lecturer) {
    account.activated = true;
    console.log(account);
    this.lecturerService.updateLecturer(account).subscribe(
      (res) => {
        if (res.success) {
          this.unActivatedAccounts.splice(
            this.unActivatedAccounts.findIndex((a) => a.id == account.id),
            1
          );
          this.notifyService.showSuccess(
            "Account activated successfully.",
            "Success"
          );
        }
      },
      (reason) => {
        this.notifyService.showError(
          "We were unable to process your request.",
          "Operation failed"
        );
      }
    );
  }
}
