import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { ApiService } from '../../services/api/api.service';
import { SolicitudResidenciaI } from '../../models/solicitudResidencia';


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {

  solicitudesDeResidencia: SolicitudResidenciaI[] = [];
  constructor(private apiuser: UserService, private router: Router, private apiservicio: ApiService) { }

  ngOnInit(): void {

    let usersUsername = (localStorage.getItem('username'));
    this.apiuser.getSingleUser(usersUsername).subscribe(data => {
      console.log(data.id);
      this.apiservicio.getLoadSolResidencia(data.id).subscribe(data => {
        this.solicitudesDeResidencia = data;
      });
    });
  }


  getSolicitudesResidencia(idUser: any): Observable<SolicitudResidenciaI[]> {
    return this.apiservicio.getLoadSolResidencia(idUser).pipe(
      map(data => Array.isArray(data) ? data : [data])
    );
  }

}
