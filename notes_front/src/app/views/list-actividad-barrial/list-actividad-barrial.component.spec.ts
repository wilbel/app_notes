import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListActividadBarrialComponent } from './list-actividad-barrial.component';

describe('ListActividadBarrialComponent', () => {
  let component: ListActividadBarrialComponent;
  let fixture: ComponentFixture<ListActividadBarrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListActividadBarrialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListActividadBarrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
