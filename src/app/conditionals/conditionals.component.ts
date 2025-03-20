import { Component } from '@angular/core';

@Component({
  selector: 'app-conditionals',
  imports: [],
  templateUrl: './conditionals.component.html',
  styleUrl: './conditionals.component.scss'
})
export class ConditionalsComponent {

  hasPassedExam: boolean = false;
  exams: string[] = ["Math", "Programming", "Dutch", "PE"];
  prediction: string = '';

  takeExam() {
    this.hasPassedExam = !this.hasPassedExam;
  }

}
