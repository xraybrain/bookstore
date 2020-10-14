import { Component, OnInit } from "@angular/core";
import { Student } from "src/app/models/Student.model";
import { StudentService } from "src/app/services/student.service";
import { NotificationService } from "src/app/services/notification.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ProfileCardComponent } from "src/app/profile-card/profile-card.component";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent implements OnInit {
  private students: Student[];
  private searchquery: string;
  constructor(
    private studentService: StudentService,
    private notifyService: NotificationService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      (students) => {
        this.students = students;
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "Server was unable to load data",
          "Operation failed"
        );
      }
    );
  }

  onViewProfile(profile: Student) {
    let modalRef = this.modalService.open(ProfileCardComponent);
    modalRef.componentInstance.title = "Student Profile";
    modalRef.componentInstance.profile = profile;
  }

  onSearch(search) {
    this.studentService.getStudents(search["searchquery"]).subscribe(
      (students) => {
        this.students = students;
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "Server was unable to load data",
          "Operation failed"
        );
      }
    );
  }
}
