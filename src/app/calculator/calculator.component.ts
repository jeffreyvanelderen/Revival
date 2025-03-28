import { Component } from '@angular/core';
import { CalculatorButtonComponent, Operator, Symbol } from "../calculator-button/calculator-button.component";

@Component({
  selector: 'app-calculator',
  imports: [CalculatorButtonComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  symbols: Symbol[] = [];
  isLastSymbolOperator: boolean = false;

  // Exercise: single event handler
  onPressButton(symbol: Symbol) {
    if (symbol.value === Operator.CLEAR) {
      this.symbols = [];
      this.isLastSymbolOperator = false;
      return;
    }

    this.symbols.push(symbol);
    this.isLastSymbolOperator = symbol.type === Operator.OPERATOR;

    console.log(JSON.stringify(this.symbols));

    this.calculate();
  }

  // 5 + 3 - 8 * 12 / 2 =
  calculate() {
    // If we have more than 1 DIGIT entry, we can already calculate something
    const digits: number[] = this.symbols
      .filter(symbol => symbol.type === Operator.DIGIT)
      .map(symbol => +symbol.value);

    const shouldCalculate = digits.length > 1;

    const operators: string[] = this.symbols
      .filter(symbol => symbol.type === Operator.OPERATOR).map(symbol => symbol.value);

    if (shouldCalculate) {
      const [firstDigit, secondDigit] = digits;
      const [operator] = operators;

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
        case "=":
        // TODO calculate everything;
      }

      // Remove first 3 symbols we already calculated (2 digits and 1 operator)
      this.symbols = this.symbols.slice(3)

      // Add new result to the beginning of the symbols:
      this.symbols.unshift({ type: Operator.DIGIT, value: result.toString() });

      console.log(`Calculated stuff. Symbols array = ${JSON.stringify(this.symbols)}`)
    }
  }

  getReadableDisplay() {
    return this.symbols.map(symbol => symbol.value).join(' ')
  }

}
