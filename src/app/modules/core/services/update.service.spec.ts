import {TestBed} from '@angular/core/testing';

import {UpdateService} from './update.service';
import {ServiceWorkerModule, SwUpdate} from '@angular/service-worker';

describe('UpdateService', () => {
  let service: UpdateService;
  const mockSwUpdateInstance = new SwUpdate({isEnabled: false} as any);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ServiceWorkerModule.register('', {enabled: false})],
      providers: [{provide: SwUpdate, useValue: mockSwUpdateInstance}]
    });
    service = TestBed.inject(UpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
