import { TestBed } from '@angular/core/testing';

import { DemoSwService } from './demo-sw.service';

describe('DemoSwService', () => {
  let service: DemoSwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
