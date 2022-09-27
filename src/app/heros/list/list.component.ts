import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  removeHero: string = '';

  deleteHero() {
    this.removeHero = this.heros.shift() || '';
  }
}
