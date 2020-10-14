import { Book } from "./Book.model";

export class OrderItem {
  constructor(
    public id: number,
    public bookId: number,
    public orderId: number,
    public quantity: number,
    public Book?: Book
  ) {}
}
