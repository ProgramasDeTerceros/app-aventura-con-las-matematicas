import { BaseModel } from "./base.model";

export class CardTurnModel extends BaseModel {
  public value: string;
  public datos?: string;
  public datos_img?: string;
  public img_pos?: string;
  public actived?: boolean = false;
  public ok?: boolean = false;
}
