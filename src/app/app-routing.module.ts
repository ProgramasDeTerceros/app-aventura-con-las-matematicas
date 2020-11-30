import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivityListComponent } from "./page/activity-list/activity-list.component";
import { ActivityComponent } from "./page/activity/activity.component";
import { Activity1Component } from "./page/activity/activity1/activity1.component";
import { Activity2Component } from "./page/activity/activity2/activity2.component";
import { Activity3Component } from "./page/activity/activity3/activity3.component";
import { Activity4Component } from "./page/activity/activity4/activity4.component";
import { Activity5Component } from "./page/activity/activity5/activity5.component";
import { GameListComponent } from "./page/game-list/game-list.component";
import { GameComponent } from "./page/game/game.component";
import { Game1Component } from "./page/game/game1/game1.component";
import { HomeComponent } from "./page/home/home.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },

  /* actividad */
  { path: "actividades", component: ActivityListComponent },
  {
    path: "actividad",
    component: ActivityComponent,
    children: [
      { path: "1", component: Activity1Component },
      { path: "2", component: Activity2Component },
      { path: "3", component: Activity3Component },
      { path: "4", component: Activity4Component },
      { path: "5", component: Activity5Component },
    ],
  },

  /* juegos */
  { path: "juegos", component: GameListComponent },
  {
    path: "juego",
    component: GameComponent,
    children: [{ path: "1", component: Game1Component }],
  },

  /* default */
  { path: "**", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
