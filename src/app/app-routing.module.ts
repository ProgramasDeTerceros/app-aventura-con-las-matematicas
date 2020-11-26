import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityListComponent } from "./page/activity-list/activity-list.component";
import { ActivityComponent } from "./page/activity/activity.component";
import { GameListComponent } from "./page/game-list/game-list.component";
import { GameComponent } from "./page/game/game.component";
import { HomeComponent } from "./page/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },

  /* actividad */
  { path: "actividad", component: ActivityListComponent },
  { path: "actividad/:id", component: ActivityComponent },

  /* juegos */
  { path: "juego", component: GameListComponent },
  { path: "juego/:id", component: GameComponent },

  /* default */
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
