import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tma-cmp2',
  template: `
    <div class="cmp">
      <p>
        cmp2 Works!
      </p>
    </div>
  `,
  styles: [".cmp {border: 3px solid yellow;}"]
})
export class Cmp2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
