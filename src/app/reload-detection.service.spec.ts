import { TestBed } from '@angular/core/testing';

import { ReloadDetectionService } from './reload-detection.service';

describe('ReloadDetectionService', () => {
  let service: ReloadDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReloadDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
