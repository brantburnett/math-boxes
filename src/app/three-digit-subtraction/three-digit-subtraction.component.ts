import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProblemTypeComponent } from '../problem-type.component';
import { randomInteger } from '../helpers/random';
import { BehaviorSubject, delay, delayWhen, interval, map, Observable, of, startWith, switchMap } from 'rxjs';

@Component({
    selector: 'app-three-digit-subtraction',
    templateUrl: './three-digit-subtraction.component.html',
    styleUrls: ['./three-digit-subtraction.component.scss'],
    standalone: false
})
export class ThreeDigitSubtractionComponent extends ProblemTypeComponent implements OnInit {

  operand1: number;
  operand2: number;

  wrongMessage = new BehaviorSubject<string>('');
  isWrong: Observable<boolean>;

  @ViewChild('answer', { static: true }) answer: ElementRef<HTMLInputElement>;

  constructor() {
    super();

    this.isWrong = this.wrongMessage.pipe(
      switchMap(p => p
        ? of(true, false).pipe(
          delayWhen(v => interval(v ? 0 : 3000))
        )
        : of(false))
    );
  }

  ngOnInit() {
    this.randomProblem();
  }

  randomProblem() {
    this.operand1 = randomInteger(100, 999);
    this.operand2 = randomInteger(0, this.operand1);
    this.answer.nativeElement.value = '';
  }

  check() {
    try {
      const answer = parseInt(this.answer.nativeElement.value, 10);
      const expected = this.operand1 - this.operand2;

      if (answer === expected) {
        this.right();
      } else {
        this.wrong(isNaN(answer) ? 'blank' : answer.toFixed(0));
      }
    } catch {
      this.wrong('?');
    }
  }

  right() {
    this.showPyro();
    this.randomProblem();
  }

  wrong(answer: string) {
    this.wrongMessage.next(`☹️ Sorry, ${answer} isn't correct. Try again!`);
  }
}
