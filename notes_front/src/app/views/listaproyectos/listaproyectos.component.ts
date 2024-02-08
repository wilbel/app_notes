import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { ProyectosI } from '../../models/proyectos.interface';

@Component({
  selector: 'app-listaproyectos',
  templateUrl: './listaproyectos.component.html',
  styleUrl: './listaproyectos.component.css'
})
export class ListaproyectosComponent {


  listaproyectos: ProyectosI[] = [];
  errorMessage: string | null = null;
  constructor(private router: Router, private apiservicio: ApiService) { }

  ngOnInit(): void {
    this.showAllProyectos();
  }

  showAllProyectos() {
    this.apiservicio.getAllProyectos().subscribe(data => {
      console.log(data);
      this.listaproyectos = data;
    });
  }

  viewProyecto(id: any) {
    this.router.navigate(['/edit_proyectos', id]);
  }

  deleteProyectos(id: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmDelete) {
      this.apiservicio.deleteProyecto(id).subscribe(
        response => {
          this.showAllProyectos();
          console.log("Eliminado con exito");
          this.errorMessage = "Eliminado con éxito.";
        },
        error => {
          this.errorMessage = "Error al eliminar la solicitud de residencia.";
          console.error('Error al eliminar la solicitud de residencia:', error);
        }
      );
    }
  }


}
