import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SezioniAttiveComponent } from './sezioni-attive.component';

describe('SezioniAttiveComponent', () => {
  let component: SezioniAttiveComponent;
  let fixture: ComponentFixture<SezioniAttiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SezioniAttiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SezioniAttiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
