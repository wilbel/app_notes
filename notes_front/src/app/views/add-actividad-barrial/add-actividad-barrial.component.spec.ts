import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActividadBarrialComponent } from './add-actividad-barrial.component';

describe('AddActividadBarrialComponent', () => {
  let component: AddActividadBarrialComponent;
  let fixture: ComponentFixture<AddActividadBarrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddActividadBarrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddActividadBarrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
