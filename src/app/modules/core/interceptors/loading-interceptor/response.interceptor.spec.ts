import {TestBed} from '@angular/core/testing';

import {ResponseInterceptor} from './loading.interceptor';
import {LoadingService} from '../../../shared/services/loading/loading.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ResultsService} from '../../../results/services/results.service';

describe('LoadingInterceptor', () => {
  let service: LoadingService;
  let resultsService: ResultsService;

  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoadingService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ResponseInterceptor,
          multi: true
        }
      ]
    }
  ));

  beforeEach(() => {
    service = TestBed.inject(LoadingService);
    resultsService = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    const interceptor: ResponseInterceptor = TestBed.inject(ResponseInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should update the loading state', () => {
    resultsService.searchMedia('t', 'test').subscribe(response => {
      expect(response).toBeTruthy();
    });
    expect(service.loadingBool).toBeTruthy();
  });
});
