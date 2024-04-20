import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrariLavorativiComponent } from './orari-lavorativi.component';

describe('OrariLavorativiComponent', () => {
  let component: OrariLavorativiComponent;
  let fixture: ComponentFixture<OrariLavorativiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrariLavorativiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrariLavorativiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
