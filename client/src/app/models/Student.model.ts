export class Student {
  constructor(
    public id: number | null,
    public firstname: string,
    public lastname: string,
    public othernames: string,
    public deptId: number,
    public matricNo: string,
    public emailAddress: string,
    public password: string,
    public avatar?: string
  ) {}
}
