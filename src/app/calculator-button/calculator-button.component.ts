import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculator-button',
  imports: [],
  templateUrl: './calculator-button.component.html',
  styleUrl: './calculator-button.component.scss'
})
export class CalculatorButtonComponent {

  @Input() value!: string;
  @Input() isOperator!: boolean;
  @Input() disabled!: boolean;

  @Output() onPress: EventEmitter<Symbol> = new EventEmitter<Symbol>();

  onPressButton() {
    this.onPress.emit({ type: this.isOperator ? Operator.OPERATOR : Operator.DIGIT, value: this.value })
  }
}

export enum Operator {
  OPERATOR = "OPERATOR",
  DIGIT = "DIGIT",
  CLEAR = "CLEAR",
}

export type Symbol = {
  type: Operator,
  value: string;
}