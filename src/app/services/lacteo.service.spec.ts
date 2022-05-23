import { TestBed } from '@angular/core/testing';

import { LacteoService } from './lacteo.service';

describe('LacteoService', () => {
  let service: LacteoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LacteoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
