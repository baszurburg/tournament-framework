import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tma-cmp3',
  template: `
    <div class="cmp">
      <p>cmp3 works</p>
      <tma-cmp4></tma-cmp4>
    </div>
  `,
  styles: []
})
export class Cmp3Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
