import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproyectosComponent } from './showproyectos.component';

describe('ShowproyectosComponent', () => {
  let component: ShowproyectosComponent;
  let fixture: ComponentFixture<ShowproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowproyectosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
