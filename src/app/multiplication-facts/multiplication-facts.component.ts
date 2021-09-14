import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-multiplication-facts',
  templateUrl: './multiplication-facts.component.html',
  styleUrls: ['./multiplication-facts.component.scss']
})
export class MultiplicationFactsComponent {
  firstFactorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '🤪']

  running = false;
  speed = 8;

  factor1 = 1;
  factor2 = 1;
  crazyFactors = false;
  productVisible = false;

  timerSubscription: Subscription = null;

  get product() {
    return this.factor1 * this.factor2;
  }

  constructor() { }

  firstFactorSelected(factorIndex: number): void {
    if (factorIndex < 9) {
      this.factor1 = factorIndex + 1;
      this.crazyFactors = false;
    } else {
      this.crazyFactors = true;
    }
  }

  toggleRunning(): void {
    if (this.running) {
      this.running = false;

      if (this.timerSubscription) {
        this.timerSubscription.unsubscribe();
        this.timerSubscription = null;
      }

      return;
    }

    this.running = true;
    this.productVisible = false;
    this.chooseFactors();

    const delay = (11 - this.speed) * 1000;
    this.timerSubscription = timer(delay, delay)
      .subscribe(() => {
        if (this.productVisible) {
          this.chooseFactors();
        }

        this.productVisible = !this.productVisible;
      });
  }

  chooseFactors(): void {
    let newFactor = 0;
    do {
      newFactor = Math.floor(Math.random() * 9) + 1;
    } while (newFactor === this.factor2);

    this.factor2 = newFactor;

    if (this.crazyFactors) {
      this.factor1 = Math.floor(Math.random() * 9) + 1
    }
  }
}
