import { Component, Input, OnInit } from "@angular/core";
import { CardTurnModel } from "src/app/shared/models/card-turn.model";

import { GeneratorCardsService } from "src/app/services/generator-cards.service";
import { generate } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-activity1",
  templateUrl: "./activity1.component.html",
  styleUrls: ["./activity1.component.scss"],
})
export class Activity1Component implements OnInit {
  public cards: CardTurnModel[];
  constructor(
    private _generateCardService: GeneratorCardsService,
    private _router: Router
  ) {}

  oldpage() {
    this._router.navigateByUrl("/actividades");
  }
  ngOnInit(): void {
    this.GenerarCartas();
  }

  GenerarCartas() {
    this.cards = this._generateCardService.GenerarSuma(3, 0, 9);
    //this.cards.push({ value: "1", datos: "55", actived: true });
  }

  oprimir(id: number) {
    const cardSelect = this.cards[id];
    if (cardSelect.actived || cardSelect.ok) {
      cardSelect.actived = false;
      return;
    }
    const cardActive = this.cards.find((card) => card.actived);
    if (!cardActive) {
      cardSelect.actived = true;
      return;
    }
    cardActive.actived = false;
    if (cardSelect.value === cardActive.value) {
      cardSelect.ok = true;
      cardActive.ok = true;
    }

    const cardPending = this.cards.find((card) => !card.ok);
    if (cardPending) {
      return;
    }
    //this.GenerarCartas();
  }
}
