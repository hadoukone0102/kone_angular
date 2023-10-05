import { TestBed } from '@angular/core/testing';

import { KoneService } from './kone.service';

describe('KoneService', () => {
  let service: KoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
