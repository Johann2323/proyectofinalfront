import { TestBed } from '@angular/core/testing';

import { RegistroLibroService } from './registro-libro.service';

describe('RegistroLibroService', () => {
  let service: RegistroLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
