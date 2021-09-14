import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-emoji-selector',
  templateUrl: './emoji-selector.component.html',
  styleUrls: ['./emoji-selector.component.scss']
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
