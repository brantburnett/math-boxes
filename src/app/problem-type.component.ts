import { ViewChild } from '@angular/core';
import { DecimalGridSetComponent } from './decimal-grid-set/decimal-grid-set.component';

export class ProblemTypeComponent {
  currentEmoji = '😁';
  pyroVisible = false;

  @ViewChild('decimalGridSet') decimalGridSet: DecimalGridSetComponent;

  onEmojiChange(value: string) {
    this.currentEmoji = value;
  }

  showPyro() {
    this.pyroVisible = true;

    setTimeout(() => this.pyroVisible = false, 3000);
  }
}
