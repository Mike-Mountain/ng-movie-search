import {TestBed} from '@angular/core/testing';

import {ResponseInterceptor} from './response.interceptor';
import {LoadingService} from '../../../shared/services/loading/loading.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ResultsService} from '../../../results/services/results.service';
import {ToastrModule} from 'ngx-toastr';

describe('LoadingInterceptor', () => {
  let service: LoadingService;
  let resultsService: ResultsService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
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
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should update the loading state', () => {
    resultsService.searchMedia('t', 'test').subscribe(response => {
      expect(response).toBeTruthy();
    });
    expect(service.loadingBool).toBeTruthy();
  });
});
