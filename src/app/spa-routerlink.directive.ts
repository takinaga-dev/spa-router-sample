import { Directive, Input, ElementRef, HostListener, Output } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appSpaRouter]'
})
export class SpaRouterlinkDirective {
  private forward: Boolean = false;
  constructor(private el: ElementRef, private location: Location) {
    this.location.subscribe(e => {
      if (this.forward) {
        this.forward = false;
        this.location.forward();
      }
    });
  }

  @Input('appSpaRouter') ref: string = '/';

  @HostListener('click') onClick() {
    console.log(`update url by pushState in ${this.ref}`);
    this.forward = true;
    this.location.go(this.ref);
    this.location.back();
  }
}
