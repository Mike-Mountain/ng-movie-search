import {TestBed} from '@angular/core/testing';

import {FeaturedService} from './featured.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FeaturedService', () => {
  let service: FeaturedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FeaturedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
