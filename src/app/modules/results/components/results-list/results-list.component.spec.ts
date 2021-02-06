import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListComponent } from './results-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResultsListComponent', () => {
  let component: ResultsListComponent;
  let fixture: ComponentFixture<ResultsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsListComponent ],
      imports: [RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
