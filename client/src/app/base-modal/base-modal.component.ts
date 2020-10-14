import { Component, OnInit, Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-base-modal",
  templateUrl: "./base-modal.component.html",
  styleUrls: ["./base-modal.component.css"],
})
export class BaseModalComponent implements OnInit {
  @Input() title;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
