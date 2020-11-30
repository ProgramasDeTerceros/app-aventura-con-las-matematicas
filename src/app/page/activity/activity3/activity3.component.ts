import { Component, OnInit } from "@angular/core";
import { GeneratorCardsService } from "src/app/services/generator-cards.service";
import { CardTurnModel } from "src/app/shared/models/card-turn.model";

@Component({
  selector: "app-activity3",
  templateUrl: "./activity3.component.html",
  styleUrls: ["./activity3.component.scss"],
})
export class Activity3Component implements OnInit {
  public cards: CardTurnModel[];
  constructor(private _generateCardService: GeneratorCardsService) {}

  ngOnInit(): void {
    this.GenerarCartas();
  }

  GenerarCartas() {
    this.cards = this._generateCardService.GenerarResta(3, 0, 9);
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
