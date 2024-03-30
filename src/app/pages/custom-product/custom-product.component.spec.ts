import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProductComponent } from './custom-product.component';

describe('CustomProductComponent', () => {
  let component: CustomProductComponent;
  let fixture: ComponentFixture<CustomProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
