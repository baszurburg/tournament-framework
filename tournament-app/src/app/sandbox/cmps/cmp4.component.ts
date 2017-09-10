import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tma-cmp4',
  template: `
    <div class="cmp">
      <p>
        cmp4 Works!
      </p>
    </div>
  `,
  styles: ['.cmp {border: 1px dashed blue;}']
})
export class Cmp4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
