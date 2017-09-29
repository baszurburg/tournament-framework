import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[tma-dropdown]'
})
export class DropdownDirective {
  private isOpen: boolean = false;
  private dropDownToggle: HTMLElement = null;

  @HostBinding('class.show') get isOpened() {
    return this.isOpen;
  }

  @HostListener('click') open() {
    if (!this.isdisabled()) {
      this.isOpen = true;
      //this.dropDownToggle.setAttribute('aria-expanded', 'true');
    }
  }

  @HostListener('mouseleave') close() {
    this.isOpen = false;
    //this.dropDownToggle.setAttribute('aria-expanded', 'false');
  }

  constructor(private el: ElementRef) {
    this.dropDownToggle = el.nativeElement.querySelector('.dropdown-toggle');
  }

  isdisabled(): boolean {
    const hElement: HTMLElement = this.el.nativeElement;
    return hElement.classList.contains('disabled') || hElement.hasAttribute('disabled');
  }

}
