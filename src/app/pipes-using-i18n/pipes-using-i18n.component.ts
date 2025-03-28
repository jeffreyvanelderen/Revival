import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-using-i18n',
  imports: [
    CurrencyPipe, 
    DatePipe, 
    DecimalPipe, 
    PercentPipe,
  ],
  templateUrl: './pipes-using-i18n.component.html',
  styleUrl: './pipes-using-i18n.component.scss'
})
export class PipesUsingI18nComponent {

  someDate = new Date();
  someCurrency = 43.12;
  someDecimal = 12.02;
  somePercentage = 12 / 42;
}
