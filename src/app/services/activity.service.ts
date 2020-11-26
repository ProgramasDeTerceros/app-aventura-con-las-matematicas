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
      url: "/actividad/1",
    },
    {
      name: "activity2",
      description: "actividad para 2",
      img: "",
      url: "/actividad/2",
    },
    {
      name: "activity3",
      description: "actividad para 3",
      img: "",
      url: "/actividad/3",
    },
    {
      name: "activity4",
      description: "actividad para 4",
      img: "",
      url: "/actividad/4",
    },
    {
      name: "activity5",
      description: "actividad para 5",
      img: "",
      url: "/actividad/5",
    },
    {
      name: "activity6",
      description: "actividad para 6",
      img: "",
      url: "/actividad/6",
    },
    {
      name: "activity7",
      description: "actividad para 7",
      img: "",
      url: "/actividad/7",
    },
    {
      name: "activity8",
      description: "actividad para 8",
      img: "",
      url: "/actividad/8",
    },
  ];
  constructor() {}

  getList(): Observable<any[]> {
    const obs: Observable<any[]> = new Observable((res) =>
      res.next(this.activity)
    );
    return obs.pipe(take(1));
  }
}
