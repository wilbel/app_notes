import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproyectosComponent } from './addproyectos.component';

describe('AddproyectosComponent', () => {
  let component: AddproyectosComponent;
  let fixture: ComponentFixture<AddproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddproyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
