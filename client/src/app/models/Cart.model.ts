import { Book } from "./Book.model";

export class Cart {
  constructor(
    public id: number,
    public bookId: number,
    public studentId: number,
    public quantity: number
  ) {}
}
