import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewActividadBarrialComponent } from './view-actividad-barrial.component';

describe('ViewActividadBarrialComponent', () => {
  let component: ViewActividadBarrialComponent;
  let fixture: ComponentFixture<ViewActividadBarrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewActividadBarrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewActividadBarrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
