import { Injectable } from "@angular/core";
import { CardTurnModel } from "../shared/models/card-turn.model";

@Injectable({
  providedIn: "root",
})
export class GeneratorCardsService {
  constructor() {}

  private getRandomArbitrary(min, max): number {
    return Math.random() * (max - min) + min;
  }
  private GenerateCouple(
    accion: string = "+",
    hasta: number = 9,
    desde: number = 0,
    limit: number,
    float: number = 0
  ): CardTurnModel[] {
    let a: number = Number(
      parseFloat("" + this.getRandomArbitrary(desde, hasta)).toFixed(float)
    );
    if (accion == "+" && a + hasta > limit) {
      hasta = limit - a;
    }
    let b: number = Number(
      parseFloat("" + this.getRandomArbitrary(desde, hasta)).toFixed(float)
    );
    if (accion == "-") {
      if (b > a) {
        const r = a;
        a = b;
        b = r;
      }
    }
    const c: string = parseFloat(
      String(
        accion == "+"
          ? a + b
          : accion == "-"
          ? a - b
          : accion == "*"
          ? a * b
          : accion == "/"
          ? a / b
          : accion == "%"
          ? a % b
          : a + b
      )
    ).toFixed(float);

    const ab: string = a + accion + b;

    return [
      { value: c, datos: c },
      { value: c, datos: ab },
    ];
  }

  public GenerarSuma(
    catidad = 4,
    desde = 0,
    hasta = 9,
    limit = 100,
    float = 0
  ): CardTurnModel[] {
    let cards: CardTurnModel[] = [];
    for (let i = 0; i <= catidad; i++) {
      const tempcard: CardTurnModel[] = this.GenerateCouple(
        "+",
        hasta,
        desde,
        limit,
        float
      );
      cards.push(...tempcard);
    }
    return cards.sort(() => Math.random() - 0.5);
  }

  public GenerarResta(
    catidad = 4,
    desde = 0,
    hasta = 9,
    limit = 100,
    float = 0
  ): CardTurnModel[] {
    let cards: CardTurnModel[] = [];
    for (let i = 0; i <= catidad; i++) {
      const tempcard: CardTurnModel[] = this.GenerateCouple(
        "-",
        hasta,
        desde,
        limit,
        float
      );
      cards.push(...tempcard);
    }
    return cards.sort(() => Math.random() - 0.5);
  }
}
