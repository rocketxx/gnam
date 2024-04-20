import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfiloRestaurantComponent } from './profilo-restaurant.component';

describe('ProfiloRestaurantComponent', () => {
  let component: ProfiloRestaurantComponent;
  let fixture: ComponentFixture<ProfiloRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfiloRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfiloRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
