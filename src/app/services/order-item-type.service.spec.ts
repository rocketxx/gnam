import { TestBed } from '@angular/core/testing';

import { OrderItemTypeService } from './order-item-type.service';

describe('OrderItemTypeService', () => {
  let service: OrderItemTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderItemTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
