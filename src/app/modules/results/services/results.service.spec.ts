import {TestBed} from '@angular/core/testing';

import {ResultsService} from './results.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('ResultsService', () => {
  let service: ResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
