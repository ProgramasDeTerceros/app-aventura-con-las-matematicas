import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-void",
  templateUrl: "./void.component.html",
  styleUrls: ["./void.component.scss"],
})
export class VoidComponent implements OnInit {
  @Input() nombre: String;
  constructor() {
    this.nombre = "registros";
  }

  ngOnInit(): void {}
}
