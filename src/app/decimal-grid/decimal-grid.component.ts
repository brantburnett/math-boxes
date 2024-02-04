import { Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-decimal-grid',
  templateUrl: './decimal-grid.component.html',
  styleUrls: ['./decimal-grid.component.scss']
})
export class DecimalGridComponent implements OnChanges {

  @Input() values: string[] = [];
  @Input() highlightIndices: number[] = [];

  get highlightIndex(): number | null {
    return this.highlightIndices.length > 0 ? this.highlightIndex[0] : null;
  }
  @Input() set highlightIndex(value: number | null) {
    this.highlightIndices = value !== null && value !== undefined ? [value] : [];
  }

  @Output() indexClick = new EventEmitter<number>();

  firstHalfIndices: number[] = [0, 1, 2, 3, 4];
  secondHalfIndices: number[] = [5, 6, 7, 8, 9];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.firstHalfIndices = [...this.getFirstHalfIndices()];
    this.secondHalfIndices = [...this.getSecondHalfIndices()];
  }

  onClick(index: number) {
    this.indexClick.emit(index);
  }

  isHighlighted(index: number): boolean {
    return this.highlightIndices.includes(index);
  }

  *getFirstHalfIndices() {
    const halfSize = this.getHalfSize();
    for (let i=0; i<halfSize; i++) {
      yield i;
    }
  }

  *getSecondHalfIndices() {
    const halfSize = this.getHalfSize();
    for (let i=0; i<halfSize; i++) {
      yield i+halfSize;
    }
  }

  private getHalfSize() {
    return Math.max(5, Math.ceil(this.values.length / 2)); // At least 5 per half
  }
}
