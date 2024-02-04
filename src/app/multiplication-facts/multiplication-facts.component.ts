import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, mapTo, of, Subject, Subscription, switchMap, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-multiplication-facts',
  templateUrl: './multiplication-facts.component.html',
  styleUrls: ['./multiplication-facts.component.scss']
})
export class MultiplicationFactsComponent implements OnInit, OnDestroy {
  firstFactorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']

  running = new BehaviorSubject<boolean>(false);
  speed = new BehaviorSubject<number>(8);
  mixAndMatch = false;

  factors = [1];
  factor1 = 1;
  factor2 = 1;
  productVisible = false;

  disposed = new Subject<void>();

  get product() {
    return this.factor1 * this.factor2;
  }

  constructor() { }

  ngOnInit() {
    combineLatest([
      this.speed,
      this.running
    ]).pipe(
      switchMap(([speed, running]) => {
        const delay = (11 - speed) * 1000;

        return running
          ? timer(delay, delay).pipe(
            mapTo(running)
          )
          : of(false);
      }),
      takeUntil(this.disposed),
      filter(running => running)
    ).subscribe(() => {
      if (this.productVisible) {
        this.chooseFactors();
      }

      this.productVisible = !this.productVisible;
    });

    this.running.pipe(
      distinctUntilChanged(),
      takeUntil(this.disposed)
    ).subscribe(running => {
      if (running) {
        // Reset on start
        this.productVisible = false;
        this.chooseFactors();
      }
    });
  }

  ngOnDestroy() {
    this.disposed.next();
  }

  factorSelected(factorIndex: number): void {
    const factor = parseInt(this.firstFactorValues[factorIndex]);

    if (this.mixAndMatch) {
      if (this.factors.includes(factor)) {
        this.factors = this.factors.filter(p => p !== factor);
      } else {
        this.factors.push(factor);
      }
    } else {
      this.factors = [factor];
    }
  }

  getHighlightIndices() {
    return this.factors.map(p => this.firstFactorValues.indexOf(p.toFixed(0)));
  }

  toggleRunning(): void {
    this.running.next(!this.running.value);
  }

  chooseFactors(): void {
    this.factor1 = this.factors[Math.floor(Math.random() * this.factors.length)];

    let newFactor = 0;
    do {
      newFactor = Math.floor(Math.random() * 12);
    } while (newFactor === this.factor2);

    this.factor2 = newFactor;
  }
}
