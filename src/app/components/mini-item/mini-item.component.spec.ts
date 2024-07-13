import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniItemComponent } from './mini-item.component';

describe('MiniItemComponent', () => {
  let component: MiniItemComponent;
  let fixture: ComponentFixture<MiniItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
