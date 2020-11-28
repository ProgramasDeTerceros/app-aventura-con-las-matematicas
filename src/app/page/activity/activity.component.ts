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
    let url = this._routeActive.pathFromRoot[0]["_futureSnapshot"]._routerState
      .url;

    //this._routeActive.params.subscribe(({id}) => {
    this._activityService.getByUrl(url).subscribe((resp) => {
      this.activty = resp;
    });
    //});
  }
}
