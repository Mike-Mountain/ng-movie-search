import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailsComponent} from './details.component';
import {ActivatedRoute} from '@angular/router';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailsComponent],
      providers: [ActivatedRoute]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
