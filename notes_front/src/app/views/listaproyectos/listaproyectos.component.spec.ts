import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaproyectosComponent } from './listaproyectos.component';

describe('ListaproyectosComponent', () => {
  let component: ListaproyectosComponent;
  let fixture: ComponentFixture<ListaproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaproyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
