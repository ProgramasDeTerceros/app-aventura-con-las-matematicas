import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-button-bad",
  templateUrl: "./button-bad.component.html",
  styleUrls: ["./button-bad.component.scss"],
})
export class ButtonBadComponent implements OnInit {
  @Input() texto: string = "danger";
  constructor() {}

  ngOnInit(): void {}
}
