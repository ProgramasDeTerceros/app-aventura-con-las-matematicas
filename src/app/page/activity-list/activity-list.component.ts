import { Component, OnInit } from "@angular/core";
import { ActivityModel } from "src/app/shared/models/activity.model";
import { ActivityService } from "../../services/activity.service";

@Component({
  selector: "app-activity-list",
  templateUrl: "./activity-list.component.html",
  styleUrls: ["./activity-list.component.scss"],
})
export class ActivityListComponent implements OnInit {
  public activitys: ActivityModel[] = [];
  constructor(private _activityService: ActivityService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._activityService.getList().subscribe((resp) => {
      // console.log({ resp });
      this.activitys = resp;
    });
  }
}
