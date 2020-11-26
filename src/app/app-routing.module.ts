import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameListCardComponent } from "./components/card/game-list-card/game-list-card.component";
import { ActivityListComponent } from "./page/activity-list/activity-list.component";
import { ActivityComponent } from "./page/activity/activity.component";
import { GameComponent } from "./page/game/game.component";
import { HomeComponent } from "./page/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },

  /* actividad */
  { path: "actividad", component: ActivityListComponent },
  { path: "actividad/:id", component: ActivityComponent },

  /* juegos */
  { path: "juego", component: GameListCardComponent },
  { path: "juego/:id", component: GameComponent },

  /* default */
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
