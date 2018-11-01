import { Component, OnInit } from "@angular/core";
import { Price } from "./price.model";

@Component({
  selector: "app-price",
  templateUrl: "./price.component.html",
  styleUrls: ["./price.component.scss"]
})
export class PriceComponent implements OnInit {
  prices: Price[] = [
    new Price("Cardio", 45),
    new Price("Body Weight", 40),
    new Price("Resistance Training", 50)
  ];
  constructor() {}

  ngOnInit() {}
}
