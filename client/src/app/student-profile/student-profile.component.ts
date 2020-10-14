import { Component, OnInit } from "@angular/core";
import { Department } from "../models/Department.model";
import { Student } from "../models/Student.model";
import { AuthService } from "../services/auth.service";
import { DepartmentService } from "../services/department.service";
import { NotificationService } from "../services/notification.service";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-student-profile",
  templateUrl: "./student-profile.component.html",
  styleUrls: ["./student-profile.component.css"],
})
export class StudentProfileComponent implements OnInit {
  private userProfile: Student;
  private departments: Department[];
  private userPassword: {
    password: string;
    confirmpwd: string;
  };

  constructor(
    private authService: AuthService,
    private departmentService: DepartmentService,
    private studentService: StudentService,
    private notifyService: NotificationService
  ) {
    this.userProfile = new Student(null, "", "", "", null, "", "", "", "");
    this.userPassword = { password: "", confirmpwd: "" };
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(
      (res) => {
        if (res.success) {
          this.userProfile = res.user;
        }
      },
      (reason) => {
        console.log(reason);
      }
    );

    this.departmentService.getDepartments().subscribe((departments) => {
      this.departments = departments;
    });
  }

  onSubmit() {
    console.log(this.userProfile);
    this.studentService.updateStudent(this.userProfile).subscribe(
      (res) => {
        if (res.success) {
          this.notifyService.showSuccess("Profile has been updated", "Success");
        }
      },
      (reason) => {
        this.notifyService.showError(
          "We encountered an error while updating your profile",
          "Operation failed"
        );
      }
    );
  }

  onChangePassword() {
    this.studentService
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
            "We encountered an error while updating your profile",
            "Operation failed"
          );
        }
      );
  }
}
