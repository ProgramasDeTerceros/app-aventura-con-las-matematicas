import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { ActivityModel } from "../shared/models/activity.model";

@Injectable({
  providedIn: "root",
})
export class ActivityService {
  private activity: ActivityModel[] = [
    {
      name: "activity1",
      description: "actividad para 1",
      img: "",
      id: "1",
    },
    {
      name: "activity2",
      description: "actividad para 2",
      img: "",
      id: "2",
    },
    {
      name: "activity3",
      description: "actividad para 3",
      img: "",
      id: "3",
    },
    {
      name: "activity4",
      description: "actividad para 4",
      img: "",
      id: "4",
    },
    {
      name: "activity5",
      description: "actividad para 5",
      img: "",
      id: "5",
    },
    {
      name: "activity6",
      description: "actividad para 6",
      img: "",
      id: "6",
    },
    {
      name: "activity7",
      description: "actividad para 7",
      img: "",
      id: "7",
    },
    {
      name: "activity8",
      description: "actividad para 8",
      img: "",
      id: "8",
    },
  ];
  constructor() {}

  getList(): Observable<ActivityModel[]> {
    const obs: Observable<ActivityModel[]> = new Observable((res) =>
      res.next(this.activity)
    );
    return obs.pipe(take(1));
  }

  get(id: string): Observable<ActivityModel> {
    const obs: Observable<ActivityModel> = new Observable((res) =>
      res.next(this.activity.find((resp) => resp.id == id))
    );
    return obs.pipe(take(1));
  }

  geturl(path: string) {
    return "/actividad/" + path;
  }
}
