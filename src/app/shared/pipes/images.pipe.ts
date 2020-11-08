import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Pipe({
  name: "images",
})
export class ImagesPipe implements PipeTransform {
  private imageDafault = "./assets/img/img-no-existe.png";
  constructor(private _domSanitazer: DomSanitizer, private _http: HttpClient) {}
  transform(value: string): unknown {
    //var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    value = value.replace(/ /g, "");
    // console.log(regexp.test(value));
    // if (!regexp.test(value)) {
    if (value == "") {
      return this.imageDafault;
    }
    return value;
    // return this._http
    //   .get(value)
    //   .pipe(
    //     map((resp) => {
    //       console.log({ resp });
    //       if (resp) {
    //         return this._domSanitazer.bypassSecurityTrustResourceUrl(value);
    //       } else {
    //         return new Observable((resp) => resp.next(this.imageDafault));
    //       }
    //     })
    //   )
    //   .toPromise()
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //this._domSanitazer.bypassSecurityTrustResourceUrl(value);
  }
}
