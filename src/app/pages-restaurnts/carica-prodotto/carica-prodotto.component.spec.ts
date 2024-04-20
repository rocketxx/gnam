import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaricaProdottoComponent } from './carica-prodotto.component';

describe('CaricaProdottoComponent', () => {
  let component: CaricaProdottoComponent;
  let fixture: ComponentFixture<CaricaProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaricaProdottoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaricaProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
