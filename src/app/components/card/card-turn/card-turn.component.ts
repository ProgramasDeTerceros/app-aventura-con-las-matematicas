import { Component, Input, OnInit } from "@angular/core";
import { CardTurnModel } from "../../../shared/models/card-turn.model";
@Component({
  selector: "app-card-turn",
  templateUrl: "./card-turn.component.html",
  styleUrls: ["./card-turn.component.scss"],
})
export class CardTurnComponent implements OnInit {
  @Input() card: CardTurnModel;
  constructor() {}

  ngOnInit(): void {
    if (!this.card) {
      this.card = { value: "" };
    }
    if (!this.card.img_pos) {
      this.card.img_pos = "./assets/img/cardFondo.jpg";
    }
  }
}
