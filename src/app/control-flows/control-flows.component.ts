import {Component} from '@angular/core';

@Component({
  selector: 'app-control-flows',
  imports: [],
  templateUrl: './control-flows.component.html',
  styleUrl: './control-flows.component.scss',
})
export class ControlFlowsComponent {
  /*
  This exposes the Exam enum to the TEMPLATE! so you can use Exam.X in the template SWITCH cases instead of using string literals!
  */
  Exam = Exam;

  hasPassedExam: boolean = false;
  exams: Exam[] = Object.values(Exam);
  prediction: string = '';

  currentExam: Exam = Exam.Math;

  takeExam() {
    this.hasPassedExam = !this.hasPassedExam;

    const newIndex = this.exams.indexOf(this.currentExam) + 1;
    this.currentExam = this.exams[newIndex >= this.exams.length ? 0 : newIndex];
  }
}

enum Exam {
  'Math' = 'Math',
  'Programming' = 'Programming',
  'Dutch' = 'Dutch',
  'PE' = 'PE',
}
