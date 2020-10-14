import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderItem } from "../models/OrderItems.model";
import { OrderService } from "../services/order.service";
import { NotificationService } from "../services/notification.service";

@Component({
  selector: "app-order-items",
  templateUrl: "./order-items.component.html",
  styleUrls: ["./order-items.component.css"],
})
export class OrderItemsComponent implements OnInit {
  private orderId: number;
  private orderItems: OrderItem[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private notifyService: NotificationService
  ) {}

  ngOnInit() {
    this.orderId = this.activatedRoute.snapshot.params.id;
    this.orderService.getOrderItems(this.orderId, null).subscribe(
      (res) => {
        console.log(res);
        this.orderItems = res["orderItems"];
      },
      (reason) => {
        console.log(reason);
        this.notifyService.showError(
          "We were unable to retreieve order items",
          "Operation failed"
        );
      }
    );
  }
}
