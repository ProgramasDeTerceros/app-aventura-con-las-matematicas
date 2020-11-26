import { Component, OnInit } from "@angular/core";
import { GameModel } from "src/app/shared/models/game.model";
import { GameService } from "src/app/services/game.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public games: GameModel[] = [];
  constructor(private _gameService: GameService) {
    this.getData();
  }

  ngOnInit(): void {}

  getData() {
    this._gameService.getList().subscribe((resp) => {
      console.log({ resp });
      this.games = resp;
    });
  }
}
