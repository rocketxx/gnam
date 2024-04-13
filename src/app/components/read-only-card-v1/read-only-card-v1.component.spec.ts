import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyCardV1Component } from './read-only-card-v1.component';

describe('ReadOnlyCardV1Component', () => {
  let component: ReadOnlyCardV1Component;
  let fixture: ComponentFixture<ReadOnlyCardV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadOnlyCardV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReadOnlyCardV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
