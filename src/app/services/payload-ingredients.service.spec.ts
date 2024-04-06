import { TestBed } from '@angular/core/testing';

import { PayloadIngredientsService } from './payload-ingredients.service';

describe('PayloadIngredientsService', () => {
  let service: PayloadIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayloadIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
