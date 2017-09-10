import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tma-cmp1',
  template: `
    <div class="cmp">
      <p>
        cmp1 Works!
      </p>
    </div>
  `,
  styles: ['.cmp {border: 1px solid red;}']
})
export class Cmp1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
