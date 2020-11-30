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
import { AppRoutingModule } from "../app-routing.module";
import { Activity2Component } from "./activity/activity2/activity2.component";
import { Activity3Component } from "./activity/activity3/activity3.component";
import { Activity4Component } from "./activity/activity4/activity4.component";
import { Activity5Component } from "./activity/activity5/activity5.component";

const declarations = [
  HomeComponent,
  ActivityComponent,
  ActivityListComponent,
  GameComponent,
  GameListComponent,
  Game1Component,
  Activity1Component,
  Activity2Component,
  Activity3Component,
  Activity4Component,
  Activity5Component,
];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ComponentsModule, AppRoutingModule],
  exports: [...declarations],
})
export class PageModule {}
