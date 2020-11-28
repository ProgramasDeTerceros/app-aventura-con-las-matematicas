import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";
import { GameModel } from "../shared/models/game.model";
@Injectable({
  providedIn: "root",
})
export class GameService {
  private games: GameModel[] = [
    { name: "game1", description: "juego para 1", img: "", id: "1" },
    { name: "game2", description: "juego para 2", img: "", id: "2" },
    { name: "game3", description: "juego para 3", img: "", id: "3" },
    { name: "game4", description: "juego para 4", img: "", id: "4" },
    { name: "game5", description: "juego para 5", img: "", id: "5" },
    { name: "game6", description: "juego para 6", img: "", id: "6" },
    { name: "game7", description: "juego para 7", img: "", id: "7" },
    { name: "game8", description: "juego para 8", img: "", id: "8" },
  ];
  constructor() {}

  getList(): Observable<GameModel[]> {
    const obs: Observable<GameModel[]> = new Observable((res) =>
      res.next(this.games)
    );
    return obs.pipe(take(1));
  }
  get(id: string): Observable<GameModel> {
    const obs: Observable<GameModel> = new Observable((res) =>
      res.next(this.games.find((resp) => resp.id == id))
    );

    return obs.pipe(take(1));
  }
  geturl(path: string) {
    return "/juego/" + path;
  }
  getByUrl(url: string) {
    return this.get(url.split("/")[2]);
  }
}
