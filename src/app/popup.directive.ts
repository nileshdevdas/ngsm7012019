import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPopup]',
})
export class PopupDirective implements OnInit {
  @Input() color;
  @Input() comptype;

  @HostListener('mouseover') handleOver(e) {
    console.log('Mouse was over me')
    console.log('default selected color is '  + this.color);
    this.elem.nativeElement.style = 'background:green; color:blue';
  }

  @HostListener('mouseout') handleOut(e) {
    console.log('Mouse was over me');
    console.log(this.elem.nativeElement);
    this.elem.nativeElement.style = 'none';
  }
  constructor(private elem: ElementRef) { }

  ngOnInit() {
    console.log(this.comptype);
    if (this.comptype == ' button') {
      this.elem.nativeElement.innerHTML = '<button class="btn btn-success">ACTION</button>';
    } else {
      this.elem.nativeElement.innerHTML = '<p>ACTION</p>';
    }
  }
}




