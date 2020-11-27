import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ActivityService } from "src/app/services/activity.service";
import { ActivityModel } from "src/app/shared/models/activity.model";

@Component({
  selector: "app-activity",
  templateUrl: "./activity.component.html",
  styleUrls: ["./activity.component.scss"],
})
export class ActivityComponent implements OnInit {
  public activty: ActivityModel;
  constructor(
    private _routeActive: ActivatedRoute,
    private _activityService: ActivityService
  ) {}

  ngOnInit(): void {
    this._routeActive.params.subscribe((params) => {
      this._activityService.get(params.id).subscribe((resp) => {
        this.activty = resp;
      });
    });
  }
}
