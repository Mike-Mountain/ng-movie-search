import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[bgImage]'
})
export class BgImageDirective implements OnInit {

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  @Input()
  set bgImage(value: string) {
    this.renderer.setStyle(
      this.el.nativeElement,
      'background',
      `url("${value}") no-repeat center/cover`
    );
  }

  ngOnInit(): void {
  }

}
