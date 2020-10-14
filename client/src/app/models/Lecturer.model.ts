export class Lecturer {
  constructor(
    public id: number | null,
    public firstname: string,
    public lastname: string,
    public othernames: string,
    public deptId: number,
    public emailAddress: string,
    public password: string,
    public avatar?: string,
    public activated?: boolean
  ) {}
}
