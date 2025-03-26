import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import {Component} from '@angular/core';
import {SpongebobPipe} from '../../pipes/spongebob/spongebob.pipe';

@Component({
  selector: 'app-pipe-usage',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    CurrencyPipe,
    SpongebobPipe,
  ],
  templateUrl: './pipe-usage.component.html',
  styleUrl: './pipe-usage.component.scss',
})
export class PipeUsageComponent {
  now = new Date();
}
