import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GameCardComponent } from "./card/game-card/game-card.component";
import { GameListCardComponent } from "./card/game-list-card/game-list-card.component";
import { NavBarComponent } from "./general/nav-bar/nav-bar.component";
import { FooterComponent } from "./general/footer/footer.component";
import { HeaderComponent } from "./general/header/header.component";
import { LoadingComponent } from "./general/loading/loading.component";
import { NotFoundComponent } from "./general/not-found/not-found.component";
import { ButtonRefrestComponent } from "./general/button/button-refrest/button-refrest.component";
import { ButtonOkComponent } from "./general/button/button-ok/button-ok.component";
import { ButtonBadComponent } from "./general/button/button-bad/button-bad.component";
import { VoidComponent } from "./general/void/void.component";
import { ActivityCardComponent } from "./card/activity-card/activity-card.component";
import { ActivityListCardComponent } from "./card/activity-list-card/activity-list-card.component";
import { CardTurnComponent } from "./card/card-turn/card-turn.component";
const declarations = [
  GameCardComponent,
  GameListCardComponent,
  NavBarComponent,
  FooterComponent,
  HeaderComponent,
  LoadingComponent,
  NotFoundComponent,
  ButtonRefrestComponent,
  ButtonOkComponent,
  ButtonBadComponent,
  VoidComponent,
  ActivityCardComponent,
  ActivityListCardComponent,
  CardTurnComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    PipesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PipesModule,
  ],
  exports: [...declarations],
})
export class ComponentsModule {}
