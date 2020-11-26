import { Component, Input, OnInit } from "@angular/core";
import { ActivityModel } from "src/app/shared/models/activity.model";

@Component({
  selector: "app-activity-list-card",
  templateUrl: "./activity-list-card.component.html",
  styleUrls: ["./activity-list-card.component.scss"],
})
export class ActivityListCardComponent implements OnInit {
  @Input() data: ActivityModel[];
  constructor() {}

  ngOnInit(): void {}
}
