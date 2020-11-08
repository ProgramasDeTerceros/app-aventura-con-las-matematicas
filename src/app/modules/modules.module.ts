import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComponentsModule } from "./components/components.module";
import { HomeComponent } from "./home/home.component";
import { GameComponent } from "./game/game.component";

const declarations = [HomeComponent, GameComponent];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, ComponentsModule],
  exports: [...declarations],
})
export class ModulesModule {}
