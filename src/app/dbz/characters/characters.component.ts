import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  @Input('charactersData')
  characters: Character[] = [];

}
