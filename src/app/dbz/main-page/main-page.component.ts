import { Component} from '@angular/core';

import { Character } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  
  new: Character = {
    name: 'Mr. Roshi',
    power: 1000
  }

  constructor() { 
  }
}
