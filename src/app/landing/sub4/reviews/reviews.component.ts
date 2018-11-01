import { Component, OnInit } from "@angular/core";
import { Review } from "./reviews.model";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.component.html",
  styleUrls: ["./reviews.component.scss"]
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [
    new Review(
      "Chandler",
      "Resistance Training",
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7e89aa20603ea9fe62ddc6014276ca41&auto=format&fit=crop&w=634&q=80"
    ),
    new Review(
      "Phoebe",
      "Boxing",
      "https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5020948430163a1dccb8aa26070664c4&auto=format&fit=crop&w=687&q=80"
    ),
    new Review(
      "Ross",
      "Yoga",
      "https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=077e17fb017e1258f3d5d3709729640a&auto=format&fit=crop&w=500&q=60"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
