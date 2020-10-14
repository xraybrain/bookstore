import { Injectable } from "@angular/core";
import { CoreService } from "./core.service";
import { Observable } from "rxjs";
import { Order } from "../models/Order.model";

@Injectable({
  providedIn: "root",
})
export class OrderService {
  private apiUrl: string = "api/orders";
  constructor(private coreService: CoreService) {}

  saveOrder(order: {
    studentId: number;
    paymentRef: string;
  }): Observable<IFeedBack> {
    return this.coreService.postData(order, this.apiUrl);
  }
  getOrders(): Observable<IFeedBack> {
    return this.coreService.getData(this.apiUrl);
  }
  getAllOrders(): Observable<IFeedBack> {
    return this.coreService.getData(this.apiUrl + "/all");
  }
  getOrderItems(orderId?: any, bookId?: number): Observable<IFeedBack> {
    return this.coreService.getData(
      `${this.apiUrl}/items/?oid=${orderId}&bid=${bookId}`
    );
  }
  updateOrder(order: Order): Observable<IFeedBack> {
    return this.coreService.putData(order, this.apiUrl);
  }
}
