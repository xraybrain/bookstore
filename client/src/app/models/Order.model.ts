import { Student } from './Student.model';

export class Order {
  constructor(
    public id: number,
    public studentId: number,
    public totalAmount: number,
    public status: string,
    public paymentRef: string,
    public Student?: Student
  ) {}
}
