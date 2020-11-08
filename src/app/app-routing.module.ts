import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./modules/game/game.component";

import { HomeComponent } from "./modules/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  /*juegos */

  { path: "juego", component: GameComponent },
  { path: "juego/:id", component: GameComponent },

  /* default */
  { path: "**", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
