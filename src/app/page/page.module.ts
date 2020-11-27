import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../components/components.module";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";
import { ActivityComponent } from "./activity/activity.component";
import { ActivityListComponent } from "./activity-list/activity-list.component";
import { GameListComponent } from "./game-list/game-list.component";
import { Game1Component } from "./game/game1/game1.component";
import { Activity1Component } from "./activity/activity1/activity1.component";

const declarations = [
  HomeComponent,
  ActivityComponent,
  ActivityListComponent,
  GameComponent,
  GameListComponent,
  Game1Component,
  Activity1Component,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ComponentsModule],
  exports: [...declarations],
})
export class PageModule {}
