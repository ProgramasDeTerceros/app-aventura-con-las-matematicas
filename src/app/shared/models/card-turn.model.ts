import { BaseModel } from "./base.model";

export class CardTurnModel extends BaseModel {
  public valor: string;
  public datos?: string;
  public datos_img?: string;
  public img_pos?: string;
}
