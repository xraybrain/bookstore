import { Component, OnInit } from "@angular/core";
import { OrderService } from "../services/order.service";
import { Order } from "../models/Order.model";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
})
export class OrdersComponent implements OnInit {
  private orders: Order[];
  constructor(
    private orderService: OrderService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    console.log("here");
    this.orderService.getOrders().subscribe(
      (res) => {
        console.log(res);
        this.orders = res["orders"];
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to load your orders try again",
          "Operation failed"
        );
      }
    );
  }
}
