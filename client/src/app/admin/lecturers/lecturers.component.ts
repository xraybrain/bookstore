import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Lecturer } from "src/app/models/Lecturer.model";
import { ProfileCardComponent } from "src/app/profile-card/profile-card.component";
import { LecturerService } from "src/app/services/lecturer.service";
import { NotificationService } from "src/app/services/notification.service";

@Component({
  selector: "app-lecturers",
  templateUrl: "./lecturers.component.html",
  styleUrls: ["./lecturers.component.css"],
})
export class LecturersComponent implements OnInit {
  private lecturers: Lecturer[];
  private searchquery: string;

  constructor(
    private lecturerService: LecturerService,
    private modalService: NgbModal,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.lecturerService.getLecturers().subscribe(
      (lecturers) => {
        this.lecturers = lecturers;
      },
      (reason) => {
        console.log(reason);
      }
    );
  }
  onViewProfile(profile: Lecturer) {
    console.log(profile);
    let modalRef = this.modalService.open(ProfileCardComponent);
    modalRef.componentInstance.title = "Lecturer Profile";
    modalRef.componentInstance.profile = profile;
  }

  onSearch(search) {
    console.log(search);
    this.lecturerService.getLecturers(search["searchquery"]).subscribe(
      (lecturers) => {
        this.lecturers = lecturers;
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
