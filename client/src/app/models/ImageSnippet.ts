export class ImageSnippet {
  pending: boolean = false;
  status: string = "init";

  constructor(public src: any, public file?: File) {}
}
