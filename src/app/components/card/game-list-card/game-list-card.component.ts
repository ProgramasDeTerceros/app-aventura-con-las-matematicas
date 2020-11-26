import { Component, Input, OnInit } from "@angular/core";
import { GameModel } from "../../../shared/models/game.model";

@Component({
  selector: "app-game-list-card",
  templateUrl: "./game-list-card.component.html",
  styleUrls: ["./game-list-card.component.scss"],
})
export class GameListCardComponent implements OnInit {
  @Input() data: GameModel[];
  constructor() {}

  ngOnInit(): void {}
}
