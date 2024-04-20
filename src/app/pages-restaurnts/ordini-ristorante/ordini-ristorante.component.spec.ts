import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdiniRistoranteComponent } from './ordini-ristorante.component';

describe('OrdiniRistoranteComponent', () => {
  let component: OrdiniRistoranteComponent;
  let fixture: ComponentFixture<OrdiniRistoranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdiniRistoranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdiniRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
