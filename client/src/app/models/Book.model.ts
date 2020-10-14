import { Author } from "./Author.model";

export class Book {
  constructor(
    public id: number | null,
    public lecturerId: number,
    public title: string,
    public description: string,
    public inStock: boolean,
    public price: number,
    public coverPage: string,
    public authors?: Author[] | number[]
  ) {}
}
