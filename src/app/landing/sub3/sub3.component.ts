import { Component, OnInit } from "@angular/core";
import { Time } from "./sub3.model";

@Component({
  selector: "app-sub3",
  templateUrl: "./sub3.component.html",
  styleUrls: ["./sub3.component.scss"]
})
export class Sub3Component implements OnInit {
  times: Time[] = [
    new Time("Cardio", "7:00 - 8:00"),
    new Time("Weight Lifting", "8:00 - 9:00"),
    new Time("Boxing", "10:00 - 11:00"),
    new Time("Yoga", "11:00 - 11:30")
  ];
  constructor() {}

  ngOnInit() {}
}
