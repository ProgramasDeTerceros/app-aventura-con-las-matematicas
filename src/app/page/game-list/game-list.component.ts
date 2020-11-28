import { Component, OnInit } from "@angular/core";
import { GameService } from "src/app/services/game.service";
import { GameModel } from "src/app/shared/models/game.model";

@Component({
  selector: "app-game-list",
  templateUrl: "./game-list.component.html",
  styleUrls: ["./game-list.component.scss"],
})
export class GameListComponent implements OnInit {
  public games: GameModel[] = [];
  constructor(private _gameService: GameService) {
    // console.log("dd");
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._gameService.getList().subscribe((resp) => {
      // console.log({ resp });
      this.games = resp;
    });
  }
}
