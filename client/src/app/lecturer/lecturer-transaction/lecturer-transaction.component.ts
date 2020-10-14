import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-lecturer-transaction",
  templateUrl: "./lecturer-transaction.component.html",
  styleUrls: ["./lecturer-transaction.component.css"],
})
export class LecturerTransactionComponent implements OnInit {
  private transactions;
  constructor(
    private orderService: OrderService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    let bookid = this.activatedRoute.snapshot.params.bid;
    this.orderService.getOrderItems("", bookid).subscribe((res) => {
      if (res.success) {
        this.transactions = res["orderItems"].sort(
          (a, b) =>
            new Date(b.Order.createdAt).getTime() -
            new Date(a.Order.createdAt).getTime()
        );
        console.log(this.transactions);
      }
    });
  }
}
