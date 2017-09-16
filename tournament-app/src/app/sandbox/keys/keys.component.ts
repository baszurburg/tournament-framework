import { Component } from '@angular/core';

@Component({
  selector: 'tma-keys',
  template: `
    <h2>Onkey stuff</h2>
    <input type="text" (keydown)="onKeydown($event)" (keyup)="onKeyup($event)" (keypress)="onKeypress($event)"  />

  `,
  styles: []
})
  export class KeysComponent {

  constructor() { }

  onKeydown(e: any): void {
    console.log('onkeydown');
    console.log(e);
  }

  onKeyup(e: any): void {
    console.log('onkeyup');
    console.log(e);
  }

  onKeypress(e: any): void {
    console.log('onkeypress');
    console.log(e);
  }


}
