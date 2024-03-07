import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-success",
  templateUrl: "./success.component.html",
  styleUrl: "./success.component.scss",
})
export class SuccessComponent {
  @Input() emailValue: string;
  @Input() isClicked: boolean;
  @Output() isClickedSuccess: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  onSubmit() {
    this.isClickedSuccess.emit(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
