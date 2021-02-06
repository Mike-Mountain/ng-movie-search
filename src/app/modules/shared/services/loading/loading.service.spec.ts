import {TestBed} from '@angular/core/testing';

import {LoadingService} from './loading.service';
import {Observable} from 'rxjs';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable', () => {
    const loading$ = service.loading$();
    expect(loading$).toBeInstanceOf(Observable);
  });

  it('should return a boole value', () => {
    const loading = service.loadingBool();
    expect(typeof loading).toEqual('boolean');
  });
});
