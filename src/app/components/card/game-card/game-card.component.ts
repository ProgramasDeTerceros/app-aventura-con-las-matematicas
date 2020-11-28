import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GameService } from "src/app/services/game.service";
import { GameModel } from "src/app/shared/models/game.model";

@Component({
  selector: "app-game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.scss"],
})
export class GameCardComponent implements OnInit {
  @Input() data: GameModel;
  constructor(private _router: Router, private _gameService: GameService) {}

  ngOnInit(): void {}
  public cargar(url: string) {
    if (!url || url == "") {
      return;
    }
    // console.log(url);
    this._router.navigate([this._gameService.geturl(url)]);
  }
}
