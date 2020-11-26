import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, switchMap, take } from "rxjs/operators";
import { GameModel } from "../shared/models/game.model";
@Injectable({
  providedIn: "root",
})
export class GameService {
  private games: GameModel[] = [
    { name: "game1", description: "juego para 1", img: "", url: "/juego/1" },
    { name: "game2", description: "juego para 2", img: "", url: "/juego/2" },
    { name: "game3", description: "juego para 3", img: "", url: "/juego/3" },
    { name: "game4", description: "juego para 4", img: "", url: "/juego/4" },
    { name: "game5", description: "juego para 5", img: "", url: "/juego/5" },
    { name: "game6", description: "juego para 6", img: "", url: "/juego/6" },
    { name: "game7", description: "juego para 7", img: "", url: "/juego/7" },
    { name: "game8", description: "juego para 8", img: "", url: "/juego/8" },
  ];
  constructor() {}

  getList(): Observable<any[]> {
    const obs: Observable<any[]> = new Observable((res) =>
      res.next(this.games)
    );
    return obs.pipe(take(1));
  }
}
