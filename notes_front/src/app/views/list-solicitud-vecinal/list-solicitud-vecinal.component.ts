import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { SolicitudVecinalI } from '../../models/SolicitudVecinal.interface';
@Component({
  selector: 'app-list-solicitud-vecinal',
  templateUrl: './list-solicitud-vecinal.component.html',
  styleUrl: './list-solicitud-vecinal.component.css'
})
export class ListSolicitudVecinalComponent {

  solicitudesVecinales: SolicitudVecinalI[] = [];
  errorMessage: string | null = null;
  constructor(private router: Router, private apiservicio: ApiService) { }



  ngOnInit(): void {
    this.showAllSolicitudesVecinales();
  }


  showAllSolicitudesVecinales() {
    this.apiservicio.getAllSolicitudVecinal().subscribe(data => {
      console.log(data);
      this.solicitudesVecinales = data;
    });
  }

  viewSolVecinal(id:any){
    this.router.navigate(['/editar_solicitud_vecinal', id]);
  
  }

  deleteSolVecinal(id:any){
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmDelete) {
      this.apiservicio.deleteSolicitudVecinal (id).subscribe(
        response => {
          this.showAllSolicitudesVecinales();
          console.log("Eliminado con exito");
          this.errorMessage = "Eliminado con éxito.";
        },
        error => {
          this.errorMessage = "Error al eliminar la solicitud vecinal.";
          console.error('Error al eliminar la solicitud vecinal:', error);
        }
      );
    }
  }

}
