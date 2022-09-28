import { Component} from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  new: Character = {
    name: 'Mr. Roshi',
    power: 1000
  }

  addNewCharacter( character: Character ) {
    this.characters.push(character);
  }

  constructor(private dbzService: DbzService) {
    
  }
}
