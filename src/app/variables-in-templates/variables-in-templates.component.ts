import {AsyncPipe} from '@angular/common';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-variables-in-templates',
  imports: [AsyncPipe],
  templateUrl: './variables-in-templates.component.html',
  styleUrl: './variables-in-templates.component.scss',
})
export class VariablesInTemplatesComponent implements OnInit {
  somethingAsync$ = of({name: 'Jeffrey'});

  @ViewChild('thisIsAnInputReference') input: ElementRef<Input> | undefined;

  ngOnInit(): void {
    console.log(`viewChild -> ${this.input?.nativeElement}`);
  }
}
