import { Component, OnInit } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Order } from "src/app/models/Order.model";
import { OrderService } from "src/app/services/order.service";
import { ChangeOrderStatusModalComponent } from "../change-order-status-modal/change-order-status-modal.component";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit {
  private orders: Order[];
  constructor(
    private orderService: OrderService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.orderService.getAllOrders().subscribe(
      (res) => {
        if (res.success) {
          this.orders = res["orders"];
        }
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  onChangeStatus(order: Order) {
    let modalInstance = this.modalService.open(
      ChangeOrderStatusModalComponent,
      { size: "sm" }
    );
    modalInstance.componentInstance.order = order;
    modalInstance.result.then(() => {}).catch(() => {});
  }
}
