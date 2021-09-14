import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, mapTo, of, Subject, Subscription, switchMap, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-multiplication-facts',
  templateUrl: './multiplication-facts.component.html',
  styleUrls: ['./multiplication-facts.component.scss']
})
export class MultiplicationFactsComponent implements OnInit, OnDestroy {
  firstFactorValues = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
  //'🤪' for crazy factors later

  running = new BehaviorSubject<boolean>(false);
  speed = new BehaviorSubject<number>(8);

  factor1 = 1;
  factor2 = 1;
  crazyFactors = false; // implement later
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

  firstFactorSelected(factorIndex: number): void {
    this.factor1 = factorIndex + 1;
  }

  toggleRunning(): void {
    this.running.next(!this.running.value);
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
