import { TestBed } from '@angular/core/testing';

import { BaseProductStateService } from './base-product-state.service';

describe('BaseProductStateService', () => {
  let service: BaseProductStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseProductStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
