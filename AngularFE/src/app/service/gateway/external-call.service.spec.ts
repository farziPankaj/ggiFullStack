import { TestBed } from '@angular/core/testing';

import { ExternalCallService } from './external-call.service';

describe('ExternalCallService', () => {
  let service: ExternalCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
