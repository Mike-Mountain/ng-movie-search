import {TestBed} from '@angular/core/testing';

import {BaseHttpService} from './base-http.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {environment} from '../../../../environments/environment';

class Test {
  name: string | undefined;
  id: string | undefined;
}

describe('BaseHttpService', () => {
  let service: BaseHttpService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BaseHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create the url', () => {
    const url = service.setUrl('t', 'test');
    expect(url).toBe(`${environment.apiUrl}&t=test`);
  });
});
