import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddetctividadbarrialComponent } from './addetctividadbarrial.component';

describe('AddetctividadbarrialComponent', () => {
  let component: AddetctividadbarrialComponent;
  let fixture: ComponentFixture<AddetctividadbarrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddetctividadbarrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddetctividadbarrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
