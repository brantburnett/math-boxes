import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-decimal-grid',
  templateUrl: './decimal-grid.component.html',
  styleUrls: ['./decimal-grid.component.scss']
})
export class DecimalGridComponent {

  @Input() values: string[] = [];
  @Input() highlightIndices: number[] = [];

  get highlightIndex(): number | null {
    return this.highlightIndices.length > 0 ? this.highlightIndex[0] : null;
  }
  @Input() set highlightIndex(value: number | null) {
    this.highlightIndices = value !== null && value !== undefined ? [value] : [];
  }

  @Output() indexClick = new EventEmitter<number>();

  constructor() { }

  onClick(index: number) {
    this.indexClick.emit(index);
  }

  isHighlighted(index: number): boolean {
    return this.highlightIndices.includes(index);
  }

  *firstHalf() {
    const halfSize = this.getHalfSize();
    for (let i=0; i<halfSize; i++) {
      yield i;
    }
  }

  *secondHalf() {
    const halfSize = this.getHalfSize();
    for (let i=0; i<halfSize; i++) {
      yield i+halfSize;
    }
  }

  private getHalfSize() {
    return Math.max(5, Math.ceil(this.values.length / 2)); // At least 5 per half
  }
}
