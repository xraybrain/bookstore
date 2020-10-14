import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-book-search-bar",
  templateUrl: "./book-search-bar.component.html",
  styleUrls: ["./book-search-bar.component.css"],
})
export class BookSearchBarComponent implements OnInit {
  @Output()
  searchquery: EventEmitter<string>;
  constructor() {
    this.searchquery = new EventEmitter<string>();
  }

  model = { searchquery: "" };
  ngOnInit() {}

  onSubmit() {
    this.searchquery.emit(this.model.searchquery);
    console.log(this.model)
  }
}
