import { Component } from '@angular/core';
import { CalculatorButtonComponent, Operator, Symbol } from "../calculator-button/calculator-button.component";

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  private isFirstSymbolDigit: boolean = false;
  private isLastSymbolOperator: boolean = false;

  symbols: Symbol[] = [];
  isOperatorDisabled = this.isLastSymbolOperator;
  displayEndResult: number | undefined;


  // Exercise: single event handler
  onPressButton(symbol: Symbol) {
    if (symbol.value === Operator.CLEAR) {
      this.symbols = [];
      this.isLastSymbolOperator = false;
      this.isFirstSymbolDigit = false;
      this.displayEndResult = undefined;
      return;
    }

    this.isLastSymbolOperator = symbol.type === Operator.OPERATOR;

    // If user enters multiple digits after each other, allow it and adjust last 2 items to 1 digit symbol by appending both
    const lastItem = this.symbols[this.symbols.length - 1];
    if (symbol.type === Operator.DIGIT && lastItem?.type === Operator.DIGIT) {
      const lastDigitItem = lastItem.value;

      // Remove last item
      this.symbols = this.symbols.slice(0, this.symbols.length - 1);

      // Append new digit at end of symbols, which contains the appended last 2 digits
      this.symbols.push({
        type: Operator.DIGIT,
        value: `${lastDigitItem}${symbol.value}`,
      });
      return;
    }

    this.symbols.push(symbol);

    console.log(JSON.stringify(this.symbols));

    if (symbol.value === "=") {
      this.calculate();
    }
  }

  // 0 1 2 3 4 5 6 -->>> even is DIGIT, oneven is OPERATOR
  // 5 + 3 - 8 + 12 - 2 =
  calculate() {
    let endResult: number = +this.symbols[0].value;

    const jumpBy = 2;
    for (let i = jumpBy; i <= this.symbols.length - jumpBy; i += jumpBy) {
      const firstDigit = endResult;
      const operator = this.symbols[i - 1].value;
      const secondDigit = +this.symbols[i].value;

      endResult = this.calculateForPart(firstDigit, secondDigit, operator);

      console.log(`index=${i} -->>> ${firstDigit} ${operator} ${secondDigit} = ${endResult}`);
    }

    this.displayEndResult = endResult;

    console.log(`Calculated stuff. end result = ${endResult}`);
  }

  calculateForPart(firstDigit: number, secondDigit: number, operator: string): number {
    let result = 0;

    switch (operator) {
      case "*":
        result = firstDigit * secondDigit;
        break;
      case "+":
        result = firstDigit + secondDigit;
        break;
      case "-":
        result = firstDigit - secondDigit;
        break;
      case "/":
        result = firstDigit / secondDigit;
        break;
      default:
        throw new Error(`Uknown operator: ${operator}`)
    }

    return result;
  }

  getReadableDisplay() {
    return `${this.symbols.map(symbol => symbol.value).join(' ')} ${this.displayEndResult !== undefined ? this.displayEndResult : ''}`
  }

}
