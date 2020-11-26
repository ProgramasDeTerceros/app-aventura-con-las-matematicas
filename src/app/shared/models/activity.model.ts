import { BaseModel } from "./base.model";

export class ActivityModel extends BaseModel {
  public img?: string;
  public name?: string;
  public description?: string;
  public url?: string;
  public actived?: boolean = true;
}
