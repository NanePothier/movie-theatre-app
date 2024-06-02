import { Component, EventEmitter, Input, Output } from '@angular/core';

const BTN_TYPE = {
  ACTION: 'action',
  CANCEL: 'cancel',
};

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input({ required: true }) btnTitle!: string;
  @Input() btnType: string = BTN_TYPE.ACTION;
  @Input() isDisabled: boolean = false;

  @Output() clickEvent = new EventEmitter<string>();

  onClick() {
    this.clickEvent.emit();
  }
}
