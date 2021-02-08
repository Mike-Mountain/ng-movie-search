import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeaturedComponent} from './featured.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SpinnerComponent} from '../../../shared/components/spinner/spinner.component';

describe('FeaturedComponent', () => {
  let component: FeaturedComponent;
  let fixture: ComponentFixture<FeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FeaturedComponent, SpinnerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
