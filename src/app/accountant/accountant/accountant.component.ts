import { Component } from '@angular/core';

@Component({
  selector: 'app-accountant',
  template: `
    <h2>{{ title }}</h2>
    <h3>
      The base number is: <strong> {{ number }} </strong>
    </h3>

    <button (click)="accumulate(-addSubNumber)">- {{ addSubNumber }}</button>

    <span> {{ number }} </span>

    <button (click)="accumulate(+addSubNumber)">+ {{ addSubNumber }}</button>
  `,
})
export class AccountantComponent {
  title: string = 'Contador App';
  number: number = 55;
  addSubNumber: number = 10;

  accumulate(value: number) {
    this.number += value;
  }
}
