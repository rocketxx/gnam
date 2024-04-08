import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPaninoFilterComponent } from './pizza-panino-filter.component';

describe('PizzaPaninoFilterComponent', () => {
  let component: PizzaPaninoFilterComponent;
  let fixture: ComponentFixture<PizzaPaninoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaPaninoFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PizzaPaninoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
