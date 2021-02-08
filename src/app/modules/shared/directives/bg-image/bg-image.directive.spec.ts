import {BgImageDirective} from './bg-image.directive';
import {Component, ElementRef, Renderer2} from '@angular/core';
import {TestBed} from '@angular/core/testing';

@Component({
  template: `
    <div [bgImage]="bgImg"></div>
  `
})
class TestComponent {
  bgImg = 'https://m.media-amazon.com/images/M/MV5BYTcxYTk3MWQtZThlMS00ZjQ0LTg0NjktNGVkNWM2MTAyYWJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg';
}

describe('BgImageDirective', () => {
  let fixture;
  let el: ElementRef;
  let renderer: Renderer2;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BgImageDirective, TestComponent],
      providers: [Renderer2]
    }).createComponent(TestComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
    renderer = fixture.componentRef.injector.get(Renderer2);
  });


  it('should create an instance', () => {
    const directive = new BgImageDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
