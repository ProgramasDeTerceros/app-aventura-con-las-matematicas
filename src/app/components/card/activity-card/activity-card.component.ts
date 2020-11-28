import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivityService } from "src/app/services/activity.service";
import { ActivityModel } from "src/app/shared/models/activity.model";

@Component({
  selector: "app-activity-card",
  templateUrl: "./activity-card.component.html",
  styleUrls: ["./activity-card.component.scss"],
})
export class ActivityCardComponent implements OnInit {
  @Input() data: ActivityModel;
  constructor(
    private _router: Router,
    private _activityService: ActivityService
  ) {}

  ngOnInit(): void {}
  public cargar(url: string) {
    if (!url || url == "") {
      return;
    }
    // console.log(url);
    this._router.navigate([this._activityService.geturl(url)]);
  }
}
