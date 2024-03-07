import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  emailValue: string;
  isClicked: boolean;

  constructor() {}

  getEmailValue(email: string) {
    this.emailValue = email;
  }

  getIsClickedValue(clicked: boolean) {
    this.isClicked = clicked;
  }
}
