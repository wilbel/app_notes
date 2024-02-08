import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { ActividadBarrialI } from '../../models/actividadBarrial.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-actividad-barrial',
  templateUrl: './list-actividad-barrial.component.html',
  styleUrl: './list-actividad-barrial.component.css'
})
export class ListActividadBarrialComponent {

  constructor(private router: Router, private apinotice: ApiService, private api: UserService) { }
  errorMessage: string | null = null;
  actividadBarrial: ActividadBarrialI[] = [];
  ngOnInit(): void {
    this.showAllActividadBarrial();
  }


  showAllActividadBarrial() {
    this.apinotice.getAllActividadesBarrial().subscribe(data => {
      console.log(data);
      this.actividadBarrial = data;
    });
  }

  deleteActividadBarrial(id: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmDelete) {
      this.apinotice.deleteActiviadBarrial(id).subscribe(
        response => {
          this.showAllActividadBarrial();
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
