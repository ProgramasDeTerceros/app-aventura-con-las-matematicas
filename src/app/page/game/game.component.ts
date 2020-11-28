import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GameService } from "src/app/services/game.service";
import { GameModel } from "src/app/shared/models/game.model";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
})
export class GameComponent implements OnInit {
  public game: GameModel;
  constructor(
    private _routeActive: ActivatedRoute,
    private _gameervice: GameService
  ) {}

  ngOnInit(): void {
    let url = this._routeActive.pathFromRoot[0]["_futureSnapshot"]._routerState
      .url;
    //this._routeActive.params.subscribe(({id}) => {
    this._gameervice.getByUrl(url).subscribe((resp) => {
      this.game = resp;
    });
    //});
  }
}
