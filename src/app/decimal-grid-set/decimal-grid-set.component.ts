import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-decimal-grid-set',
    templateUrl: './decimal-grid-set.component.html',
    styleUrls: ['./decimal-grid-set.component.scss'],
    standalone: false
})
export class DecimalGridSetComponent implements OnChanges {

  @Input() count = 2;
  @Input() currentValue = '😁';

  values: string[] = [];
  indexes: number[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const length = this.count * 10;

    if (this.values.length < length) {
      this.values.fill(null, this.values.length, length - 1);
    } else if (this.values.length > length) {
      this.values = this.values.slice(0, length - 1);
    }

    if (changes.count) {
      this.indexes = Array.from(new Array(this.count).keys());
    }
  }

  onClick(index: number) {
    this.values[index] = this.values[index] === this.currentValue ? null : this.currentValue;
  }

  public clear() {
    this.values.fill(null, 0, this.values.length);
  }
}
