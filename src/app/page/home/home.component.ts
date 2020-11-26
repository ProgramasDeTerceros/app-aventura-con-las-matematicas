import { Component, OnInit } from "@angular/core";
import { GameModel } from "src/app/shared/models/game.model";
import { GameService } from "src/app/services/game.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
