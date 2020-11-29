import { Component, OnInit } from "@angular/core";
import { CardTurnModel } from "src/app/shared/models/card-turn.model";

import { GeneratorCardsService } from "src/app/services/generator-cards.service";
@Component({
  selector: "app-activity1",
  templateUrl: "./activity1.component.html",
  styleUrls: ["./activity1.component.scss"],
})
export class Activity1Component implements OnInit {
  public cards: CardTurnModel[];
  constructor(private _generateCardService: GeneratorCardsService) {}

  ngOnInit(): void {
    this.cards = this._generateCardService.GenerarSuma(10, 0, 9);
  }
}
