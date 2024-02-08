import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsolicitudvecinalComponent } from './editsolicitudvecinal.component';

describe('EditsolicitudvecinalComponent', () => {
  let component: EditsolicitudvecinalComponent;
  let fixture: ComponentFixture<EditsolicitudvecinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditsolicitudvecinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditsolicitudvecinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
