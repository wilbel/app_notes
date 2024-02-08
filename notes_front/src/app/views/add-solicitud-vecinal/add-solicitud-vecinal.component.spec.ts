import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolicitudVecinalComponent } from './add-solicitud-vecinal.component';

describe('AddSolicitudVecinalComponent', () => {
  let component: AddSolicitudVecinalComponent;
  let fixture: ComponentFixture<AddSolicitudVecinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddSolicitudVecinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSolicitudVecinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
