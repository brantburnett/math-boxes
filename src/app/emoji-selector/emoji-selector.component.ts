import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatButtonToggleGroup, MatButtonToggle } from '@angular/material/button-toggle';

@Component({
    selector: 'app-emoji-selector',
    templateUrl: './emoji-selector.component.html',
    styleUrls: ['./emoji-selector.component.scss'],
    imports: [MatButtonToggleGroup, MatButtonToggle]
})
export class EmojiSelectorComponent {
  options = [
    '😁',
    '👻',
    '👽',
    '🤖',
    '😺',
    '👮‍♀️',
    '👩‍🚀',
    '👑',
    '👶🏽',
    '🐰',
    '🍏',
    '⚽️',
    '🚌',
    '🚀',
    '❤️'
  ];

  @Input() currentValue = '😁';
  @Output() currentValueChange = new EventEmitter<string>();

  constructor() { }

}
