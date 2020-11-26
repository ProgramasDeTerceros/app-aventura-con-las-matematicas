import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GameModel } from "src/app/shared/models/game.model";

@Component({
  selector: "app-game-card",
  templateUrl: "./game-card.component.html",
  styleUrls: ["./game-card.component.css"],
})
export class GameCardComponent implements OnInit {
  @Input() data: GameModel;
  constructor(private _router: Router) {}

  ngOnInit(): void {}
  public cargar(url: string) {
    if (!url || url == "") {
      return;
    }
    console.log(url)
    this._router.navigate([url]);
  }
}
