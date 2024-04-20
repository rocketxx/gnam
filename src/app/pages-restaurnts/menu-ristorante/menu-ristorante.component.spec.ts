import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRistoranteComponent } from './menu-ristorante.component';

describe('MenuRistoranteComponent', () => {
  let component: MenuRistoranteComponent;
  let fixture: ComponentFixture<MenuRistoranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuRistoranteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuRistoranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
