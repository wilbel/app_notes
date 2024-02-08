import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { SolicitudVecinalI } from '../../models/SolicitudVecinal.interface';

@Component({
  selector: 'app-list-singlesol-vecinal',
  templateUrl: './list-singlesol-vecinal.component.html',
  styleUrl: './list-singlesol-vecinal.component.css'
})
export class ListSinglesolVecinalComponent implements OnInit {

  constructor(private apiJunta: ApiService, private api: UserService, private router: Router) { }
  errorMessage: string | null = null;
  id_user: string | null = null;
  listaSolicitudVecinal: SolicitudVecinalI[] = [];

  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.api.getSingleUser(usersUsername).subscribe(data => {
      console.log(data);
      this.id_user = data.id;
      this.getSolicitudVecinalSingleId(data.id);
    });
  }


  getSolicitudVecinalSingleId(id: any) {
    this.apiJunta.getSingleSolicitudVecinal(id).subscribe(data => {
      console.log(data);
      this.listaSolicitudVecinal = data;
    });
  }
 
  deleteSolVecinal(id:any){
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmDelete) {
      this.apiJunta.deleteSolicitudVecinal (id).subscribe(
        response => {
          this.getSolicitudVecinalSingleId(this.id_user);
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
