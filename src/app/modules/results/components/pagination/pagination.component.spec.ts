import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginationComponent} from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paginate next', () => {
    component.page = 1;
    component.totalPages = 50;
    component.updatePage('next');
    expect(component.page).toEqual(2);
  });

  it('should paginate previous', () => {
    component.page = 5;
    component.totalPages = 50;
    component.updatePage('previous');
    expect(component.page).toEqual(4);
  });

  it('should not paginate back if the page is 1', () => {
    component.page = 1;
    component.updatePage('previous');
    expect(component.page).toEqual(1);
  });

  it('should not paginate forward if on the last page', () => {
    component.page = 10;
    component.totalPages = 10;
    component.updatePage('next');
    expect(component.page).toEqual(10);
  });
});
