import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImagesPipe } from "./images.pipe";

const declarations = [ImagesPipe];

@NgModule({
  declarations: [...declarations],
  imports: [CommonModule],
  exports: [...declarations],
})
export class PipesModule {}
