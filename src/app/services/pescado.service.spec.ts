import { TestBed } from '@angular/core/testing';

import { PescadoService } from './pescado.service';

describe('PescadoService', () => {
  let service: PescadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PescadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
