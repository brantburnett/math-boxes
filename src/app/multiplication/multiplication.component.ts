import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProblemTypeComponent } from '../problem-type.component';
import { DecimalGridSetComponent } from '../decimal-grid-set/decimal-grid-set.component';
import { MatFormField, MatInput } from '@angular/material/input';
import { EmojiSelectorComponent } from '../emoji-selector/emoji-selector.component';
import { MatButton } from '@angular/material/button';
import { PyroComponent } from '../pyro/pyro.component';

@Component({
    selector: 'app-multiplication',
    templateUrl: './multiplication.component.html',
    styleUrls: ['./multiplication.component.scss'],
    imports: [MatFormField, MatInput, EmojiSelectorComponent, DecimalGridSetComponent, MatButton, PyroComponent]
})
export class MultiplicationComponent extends ProblemTypeComponent implements OnInit {

  operand1: number;
  operand2: number;

  @ViewChild('answer', { static: true }) answer: ElementRef<HTMLInputElement>;
  @ViewChild('grid', { static: true }) grid: DecimalGridSetComponent;

  constructor() { super(); }

  ngOnInit() {
    this.randomProblem();
  }

  randomProblem() {
    this.operand1 = Math.floor(Math.random() * 9 + 1);
    this.operand2 = Math.floor(Math.random() * 19 / this.operand1 + 1);
    this.answer.nativeElement.value = '';
  }

  check() {
    try {
      const answer = parseInt(this.answer.nativeElement.value, 10);
      const expected = this.operand1 * this.operand2;
      console.log({answer, operand1: this.operand1, operand2: this.operand2, expected, compare: answer === expected});

      if (answer === expected) {
        this.right();
      } else {
        this.wrong();
      }
    } catch {
      this.wrong();
    }
  }

  right() {
    this.showPyro();
    this.randomProblem();
    this.grid.clear();
  }

  wrong() {
    console.log('wrong');
  }
}
