import { Component, OnInit } from "@angular/core";
import { Department } from "src/app/models/Department.model";
import { Lecturer } from "src/app/models/Lecturer.model";
import { AuthService } from "src/app/services/auth.service";
import { DepartmentService } from "src/app/services/department.service";
import { LecturerService } from "src/app/services/lecturer.service";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "app-lecturer-profile",
  templateUrl: "./lecturer-profile.component.html",
  styleUrls: ["./lecturer-profile.component.css"],
})
export class LecturerProfileComponent implements OnInit {
  private userProfile: Lecturer;
  private userPassword: { password: string; confirmpwd: string };
  private departments: Department[];

  constructor(
    private lecturerService: LecturerService,
    private departmentService: DepartmentService,
    private authService: AuthService,
    private notifyService: NotificationService
  ) {
    this.userProfile = new Lecturer(null, "", "", "", null, "", "");
    this.userPassword = { password: "", confirmpwd: "" };
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (res) => {
        console.log(res);
        if (res.success) {
          this.userProfile = res["user"];
        }
      },
      (reason) => {
        console.log(reason);
      }
    );

    this.departmentService.getDepartments().subscribe(
      (departments) => {
        this.departments = departments;
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  onSubmit() {
    this.lecturerService.updateLecturer(this.userProfile).subscribe(
      (res) => {
        if (res.success) {
          this.notifyService.showSuccess("Updated successfully", "Success");
        }
      },
      (reason) => {
        this.notifyService.showSuccess(
          "We encountered an error while updating your details",
          "Operation Failed"
        );
      }
    );
  }

  onChangePassword() {
    this.lecturerService
      .changePassword({
        password: this.userPassword.password,
        id: this.userProfile.id,
      })
      .subscribe(
        (res) => {
          if (res.success) {
            this.notifyService.showSuccess("Password changed", "Success");
            this.authService.logout();
          }
        },
        (reason) => {
          this.notifyService.showError(
            "We encountered an error while updating your password",
            "Operation Failed"
          );
        }
      );
  }
}
