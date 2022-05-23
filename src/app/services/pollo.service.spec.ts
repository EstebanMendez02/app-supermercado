import { TestBed } from '@angular/core/testing';

import { PolloService } from './pollo.service';

describe('PolloService', () => {
  let service: PolloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
