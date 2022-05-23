import { TestBed } from '@angular/core/testing';

import { VerduraService } from './verdura.service';

describe('VerduraService', () => {
  let service: VerduraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerduraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
