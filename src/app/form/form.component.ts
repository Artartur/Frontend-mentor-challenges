import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.scss",
})
export class FormComponent {
  @Output() emailValue: EventEmitter<string> = new EventEmitter<string>();
  @Output() isClickedValue: EventEmitter<boolean> = new EventEmitter<boolean>();

  email: string = "";
  isClicked: boolean = false;
  isEmailValid: boolean = true;
  constructor() {}

  changeBorderColor() {
    if (this.email == "") {
      this.isClickedValue.emit((this.isClicked = false));
      return "border-secondary-subtle";
    } else if (this.email !== "" && !this.isEmailValid) {
      this.isClickedValue.emit((this.isClicked = false));
      return "bg-danger-subtle border-danger text-danger-emphasis";
    }
    return "bg-success-subtle border-success text-success";
  }

  changeImageByScreenSize() {
    return window.innerWidth <= 300 && window.innerWidth >= 420
      ? "assets/illustration-sign-up-mobile.svg"
      : "assets/illustration-sign-up-desktop.svg";
  }

  onSubmit() {
    if (this.isEmailValid) {
      this.isClickedValue.emit((this.isClicked = true));
      window.scrollTo({ top: 0, behavior: "smooth" });
      return this.emailValue.emit(this.email);
    }
    return false;
  }

  validateEmail() {
    var regex = /\S+@\S+\.\S+/;
    this.isEmailValid = regex.test(this.email);
  }
}
