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
      name: "A divertirnos sumando hasta 10 ",
      description:
        "Encontraran una serie de cartas, en donde los niños armaran parejas de la suma y su respectiva respuesta.",
      img: "",
      id: "1",
    },
    {
      name: "Fiesta de las sumas hasta el 100",
      description:
        "Encontraran una serie de cartas, donde se armaran parejas de la respetiva sumas y su respuesta",
      img: "",
      id: "2",
    },
    {
      name: "Disfruta de restar hasta el 10 ",
      description:
        "Encontrarán una serie de cartas, donde se armarán parejas de las respectivas restas y sus respuestas",
      img: "",
      id: "3",
    },
    {
      name: "Aumenta tu curiosidad con las restas ",
      description:
        "Encontrarán una serie de cartas, donde se armarán parejas de las respectivas restas y sus respuestas",
      img: "",
      id: "4",
    },
    // {
    //   name: "activity5",
    //   description: "actividad para 5",
    //   img: "",
    //   id: "5",
    // },
    // {
    //   name: "activity6",
    //   description: "actividad para 6",
    //   img: "",
    //   id: "6",
    // },
    // {
    //   name: "activity7",
    //   description: "actividad para 7",
    //   img: "",
    //   id: "7",
    // },
    // {
    //   name: "activity8",
    //   description: "actividad para 8",
    //   img: "",
    //   id: "8",
    // },
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

  getByUrl(url: string) {
    return this.get(url.split("/")[2]);
  }
}
