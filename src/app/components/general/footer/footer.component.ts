import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  fecha: number;
  nombre: string;
  constructor() {
    this.fecha = new Date().getFullYear();
    this.nombre = "aventura matematica";
  }

  ngOnInit(): void {}
}
