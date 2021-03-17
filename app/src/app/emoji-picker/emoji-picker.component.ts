import { Component, Output, EventEmitter } from '@angular/core';
import * as emojiJSON from './data/list.json';

@Component({
  selector: 'emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent {
  categories = [{"name":"Smileys & Emotion","cellsNumber":23},{"name":"People & Body","cellsNumber":16},{"name":"Animals & Nature","cellsNumber":18},{"name":"Food & Drink","cellsNumber":14},{"name":"Activities","cellsNumber":10},{"name":"Travel & Places","cellsNumber":33},{"name":"Objects","cellsNumber":34},{"name":"Symbols","cellsNumber":39},{"name":"Flags","cellsNumber":53}]

  emojiArr = emojiJSON['default'];
  @Output() onEmojiAdd = new EventEmitter();
  constructor() { }

  categoryIdentifier(item): string {
    return item.name;
  }

  emojiIdentifier(item): string {
    return item.html;
  }

  emitEmoji(event: MouseEvent, emoji: string): void {
    event.stopImmediatePropagation();
    this.onEmojiAdd.emit(emoji);
  }
}
