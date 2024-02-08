import { Component, ChangeDetectorRef } from '@angular/core';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear: number;

  constructor(private cdr: ChangeDetectorRef, private zone: NgZone) {
    this.currentYear = new Date().getFullYear();
  }

  formularioVisible = false;

  toggleFormulario() {
    this.formularioVisible = !this.formularioVisible;
  }


  toggleItemActivo(item: any) {
    this.preguntas.forEach((pregunta) => {
      if (pregunta !== item) {
        pregunta.activo = false;
      }
    });

    item.activo = !item.activo;
  }


  preguntas = [
    {
      pregunta: '¿Crear Solicitud de residencia',
      respuesta: 'Visita el siguiente link: <a href="/">Crear solicitud de residencia</a>',
      activo: false
    },
    {
      pregunta: '¿Registrar Usuario',
      respuesta: 'Visita el siguiente link: <a href="/">Ayuda usuarios</a>',
      activo: false
    },
    {
      pregunta: '¿Registrar Solicitud vecinal?',
      respuesta: 'Visita el siguiente link: <a href="/">Registro de solicitud de residencia</a>',
      activo: false
    },
    {
      pregunta: '¿Postular proyectos?',
      respuesta: 'Visita el siguiente link: <a href="/">¿Cómo postular en un proyecto?</a>',
      activo: false
    },
    {
      pregunta: '¿Inscribirse en actividades barriales?',
      respuesta: 'Visita el siguiente link: <a href="/">Inscribirse en actividad barrial</a>',
      activo: false
    }
  ];
}
