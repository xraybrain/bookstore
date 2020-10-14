import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { Order } from "src/app/models/Order.model";
import { NotificationService } from "src/app/services/notification.service";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-change-order-status-modal",
  templateUrl: "./change-order-status-modal.component.html",
  styleUrls: ["./change-order-status-modal.component.css"],
})
export class ChangeOrderStatusModalComponent implements OnInit {
  constructor(
    private activeModal: NgbActiveModal,
    private orderService: OrderService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {}
  onSubmit(order: Order) {
    console.log(order);
    this.orderService.updateOrder(order).subscribe(
      (res) => {
        if (res.success) {
          this.notifyService.showSuccess(
            "Status changed succcessfully",
            "Success"
          );
          this.activeModal.close();
        } else {
          this.notifyService.showError(res.message, "Operation failed");
        }
      },
      (reason) => {
        this.notifyService.showError(
          "We encountered a problem while performing this operation.",
          "Operation failed"
        );
      }
    );
  }
}
