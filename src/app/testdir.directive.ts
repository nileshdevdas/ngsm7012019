import { Directive, HostListener, ElementRef } from '@angular/core';
import { Test2Component } from './admin/test2/test2.component';

@Directive({
  selector: '[appTestdir]',
})
export class TestdirDirective {

  constructor(private elem: ElementRef) {
    console.log(elem.nativeElement);
  }


  @HostListener('mouseclick') test(event) {
    console.log('event....');
  }

  @HostListener('mouseenter') test2(event) {
    console.log('.............', event);
  }

}
