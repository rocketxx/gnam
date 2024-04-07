import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemicustomProductComponent } from './semicustom-product.component';

describe('SemicustomProductComponent', () => {
  let component: SemicustomProductComponent;
  let fixture: ComponentFixture<SemicustomProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemicustomProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SemicustomProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
