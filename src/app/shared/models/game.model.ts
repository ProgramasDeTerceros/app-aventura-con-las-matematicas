import { BaseModel } from "./base.model";
export class GameModel extends BaseModel {
  public img?: string;
  public name?: string;
  public description?: string;
  public actived?: boolean = true;
}
