import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {
  @Input()
  new: Character = {
    name: '',
    power: 0,
  };

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  add() {
    if (this.new.name.trim().length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.new);
    this.new = {
      name: '',
      power: 0,
    };
  }
}
