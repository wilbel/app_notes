import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSolicitudVecinalComponent } from './list-solicitud-vecinal.component';

describe('ListSolicitudVecinalComponent', () => {
  let component: ListSolicitudVecinalComponent;
  let fixture: ComponentFixture<ListSolicitudVecinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListSolicitudVecinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSolicitudVecinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
