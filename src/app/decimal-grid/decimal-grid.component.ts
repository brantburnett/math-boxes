import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-decimal-grid',
  templateUrl: './decimal-grid.component.html',
  styleUrls: ['./decimal-grid.component.scss']
})
export class DecimalGridComponent implements OnInit {

  @Input() values: string[] = [];
  @Input() highlightIndex: number | null = null;

  @Output() indexClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onClick(index: number) {
    this.indexClick.emit(index);
  }

}
