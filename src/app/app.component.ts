import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  email: string = "";
  isEmailValid: boolean = true;
  constructor() {}

  changeBorderColor() {
    return this.email == ""
      ? "border-secondary"
      : this.email !== "" && !this.isEmailValid
      ? "bg-danger-subtle border-danger text-danger-emphasis"
      : "border-success";
  }

  onSubmit() {
    return this.isEmailValid ? console.log("true") : console.log("false");
  }

  validateEmail() {
    var regex = /\S+@\S+\.\S+/;
    this.isEmailValid = regex.test(this.email);
  }
}
