import { Component, OnInit, TemplateRef } from "@angular/core";
import { FormBuilder, Validators, Form, FormGroup } from "@angular/forms";
import { DepartmentService } from "../services/department.service";
import { Department } from "../models/Department.model";
import { StudentService } from "../services/student.service";
import { LecturerService } from "../services/lecturer.service";
import { Student } from "../models/Student.model";
import { Lecturer } from "../models/Lecturer.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  private departments: Department[];
  private userProfileForm: FormGroup;
  private pwdMatched: boolean = true;
  isStudent: boolean = true;
  private serverFeedback: IFeedBack;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private departmentService: DepartmentService,
    private studentService: StudentService,
    private lecturerService: LecturerService
  ) {
    this.userProfileForm = this.fb.group({
      firstname: ["", [Validators.minLength(3), Validators.required]],
      lastname: ["", [Validators.minLength(3), Validators.required]],
      othernames: [""],
      deptId: ["", Validators.required],
      matricNo: [
        "",
        Validators.pattern(/^[0-9]{4}\/(hnd|nd)\/[a-z]{2,}\/[0-9]{4,}$/i),
      ],
      emailAddress: ["", [Validators.email, Validators.required]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    });
  }

  ngOnInit() {
    // get departments
    this.departmentService.getDepartments().subscribe((result) => {
      this.departments = result;
    });
  }

  enableMatricNoField() {
    this.isStudent = this.isStudent ? false : true;
  }

  onSubmit() {
    if (this.isStudent) {
      let student = new Student(
        0,
        this.userProfileForm.get("firstname").value,
        this.userProfileForm.get("lastname").value,
        this.userProfileForm.get("othernames").value,
        this.userProfileForm.get("deptId").value,
        this.userProfileForm.get("matricNo").value,
        this.userProfileForm.get("emailAddress").value,
        this.userProfileForm.get("password").value
      );
      this.studentService.registerStudent(student).subscribe((result) => {
        this.serverFeedback = result;
        if (result.success) {
          this.router.navigate(["/login"], {
            queryParams: {
              login: 0,
            },
          });
        }
      });
    } else {
      let lecturer = new Lecturer(
        0,
        this.userProfileForm.get("firstname").value,
        this.userProfileForm.get("lastname").value,
        this.userProfileForm.get("othernames").value,
        this.userProfileForm.get("deptId").value,
        this.userProfileForm.get("emailAddress").value,
        this.userProfileForm.get("password").value
      );
      this.lecturerService.registerLecturer(lecturer).subscribe((result) => {
        this.serverFeedback = result;
        if (result.success) {
          this.router.navigate(["/login"], {
            queryParams: {
              login: 0,
            },
          });
        }
      });
    }
  }

  isMatch() {
    let pwd = this.userProfileForm.get("password").value;
    let cpwd = this.userProfileForm.get("confirmPassword").value;
    if (pwd !== cpwd) {
      this.pwdMatched = false;
    } else {
      this.pwdMatched = true;
    }
  }
}
