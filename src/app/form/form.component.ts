import { Component } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent {
  email: string = "";
  isClicked: boolean = false;
  isEmailValid: boolean = true;
  constructor() {}

  changeBorderColor() {
    if (this.email == "") {
      this.isClicked = false;
      return "border-secondary";
    } else if (this.email !== "" && !this.isEmailValid) {
      this.isClicked = false;
      return "bg-danger-subtle border-danger text-danger-emphasis";
    }
    return "bg-success-subtle border-success text-success";
  }

  onSubmit() {
    if (this.isEmailValid) {
      this.isClicked = true;
      return this.email;
    }
    return console.log("false");
  }

  validateEmail() {
    var regex = /\S+@\S+\.\S+/;
    this.isEmailValid = regex.test(this.email);
  }
}
