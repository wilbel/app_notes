import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoResidenciaComponent } from './certificado-residencia.component';

describe('CertificadoResidenciaComponent', () => {
  let component: CertificadoResidenciaComponent;
  let fixture: ComponentFixture<CertificadoResidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificadoResidenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CertificadoResidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
