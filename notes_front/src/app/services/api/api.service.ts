import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JuntaBarrialI } from '../../models/juntaBarrial.interface';
import { SolicitudResidenciaI } from '../../models/solicitudResidencia';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NoticeI } from '../../models/notice.interface';
import { ProyectosI } from '../../models/proyectos.interface';
import { ActividadBarrialI } from '../../models/actividadBarrial.interface';
import { DetallActividadBarrialI } from '../../models/detallActividadBarrial.interface';
import { DetalleProyectoI } from '../../models/postulacionProyecto.interface';
import { SolicitudVecinalI } from '../../models/SolicitudVecinal.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://localhost:5003/";

  constructor(private http: HttpClient) { }

  getSingleJunta(id_junta: any): Observable<JuntaBarrialI> {
    let address = this.url + "juntabarrial/" + id_junta;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<JuntaBarrialI>(address, { headers: headers });
  }

  //Registrar Solicitud de Residencia

  postRegisterSolResidencia(form: Partial<SolicitudResidenciaI>): Observable<any> {
    let address = this.url + "solicitudresidencia/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<SolicitudResidenciaI>(address, form, { headers: headers });
  }

  getLoadSolResidencia(idUser: any): Observable<SolicitudResidenciaI[]> {
    let address = this.url + "solicitudresidencia/single/" + idUser;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SolicitudResidenciaI[]>(address, { headers: headers });
  }

  getAllSolResidencia(): Observable<SolicitudResidenciaI[]> {
    let address = this.url + "solicitudresidencia/";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SolicitudResidenciaI[]>(address, { headers: headers });
  }

  deleteSolResidencia(id: any): Observable<any> {
    let address = this.url + "solicitudresidencia/delete/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(address, { headers: headers })
      .pipe(
        catchError(error => {
          console.error('Error al eliminar la solicitud de residencia:', error);
          throw error; // Puedes manejar el error de otra manera si es necesario
        })
      )
  }

  //Seleccionar una solicitud de residencia mediante id
  getSolicitudResidencia(id: any): Observable<SolicitudResidenciaI> {
    let address = this.url + "solicitudresidencia/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SolicitudResidenciaI>(address, { headers: headers });
  }


  putSolResidencia(form: Partial<SolicitudResidenciaI>, id: any): Observable<SolicitudResidenciaI> {
    let address = this.url + "solicitudresidencia/update/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<SolicitudResidenciaI>(address, form, { headers: headers });
  }

  //Registro de Notes

   postRegisterNotice(form: Partial<NoticeI>): Observable<any> {
     console.log(form);
     let address = this.url + "notes/save";
     let token = (localStorage.getItem('token'));
     const headers = new HttpHeaders({
       'Authorization': `Bearer ${token}`
     });
     return this.http.post<NoticeI>(address, form, { headers: headers });
   }


  /*createNotes(newNotes: NoticeI, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', image, image.name);
    formData.append('newNotes', JSON.stringify(newNotes));

    let address = this.url + "notes/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<NoticeI>(address, newNotes, { headers: headers });
  }*/



  getAllNotice(): Observable<NoticeI[]> {
    let address = this.url + "notes/list_notes";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<NoticeI[]>(address, { headers: headers });
  }

  deleteNotice(id: any): Observable<any> {
    let address = this.url + "notes/delete/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(address, { headers: headers })
      .pipe(
        catchError(error => {
          console.error('Error al eliminar el proyecto.', error);
          throw error; // Puedes manejar el error de otra manera si es necesario
        })
      )
  }







  //Proyectos

  postRegisterProyectos(form: Partial<ProyectosI>): Observable<any> {
    let address = this.url + "proyectos/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<ProyectosI>(address, form, { headers: headers });
  }


  getAllProyectos(): Observable<ProyectosI[]> {
    let address = this.url + "proyectos/list_proyectos";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ProyectosI[]>(address, { headers: headers });
  }


  deleteProyecto(id: any): Observable<any> {
    let address = this.url + "proyectos/delete/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(address, { headers: headers })
      .pipe(
        catchError(error => {
          console.error('Error al eliminar el proyecto.', error);
          throw error; // Puedes manejar el error de otra manera si es necesario
        })
      )
  }

  getSingleProeycto(id: any): Observable<ProyectosI> {
    let address = this.url + "proyectos/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ProyectosI>(address, { headers: headers });
  }


  putProyecto(form: Partial<ProyectosI>, id: any): Observable<ProyectosI> {
    let address = this.url + "proyectos/update/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<ProyectosI>(address, form, { headers: headers });
  }

  //Activdiad Barrial


  postRegisterActividadBarrial(form: Partial<ActividadBarrialI>): Observable<any> {
    let address = this.url + "actividadbarrial/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<ActividadBarrialI>(address, form, { headers: headers });
  }


  getAllActividadesBarrial(): Observable<ActividadBarrialI[]> {
    let address = this.url + "actividadbarrial/listactividades";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ActividadBarrialI[]>(address, { headers: headers });
  }


  deleteActiviadBarrial(id: any): Observable<any> {
    let address = this.url + "actividadbarrial/delete/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(address, { headers: headers })
      .pipe(
        catchError(error => {
          console.error('Error al eliminar el Actividad Barrial.', error);
          throw error; 
        })
      )
  }

  getSingleActividadBarrial(id: any): Observable<ActividadBarrialI> {
    let address = this.url + "actividadbarrial/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ActividadBarrialI>(address, { headers: headers });
  }


  putActividadBarrial(form: Partial<ActividadBarrialI>, id: any): Observable<ActividadBarrialI> {
    let address = this.url + "actividadbarrial/update/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<ActividadBarrialI>(address, form, { headers: headers });
  }

  decreaseCupo(actividadId: any): Observable<any> {
    const address = this.url + "actividadbarrial/decreasecupo/" + actividadId;
    console.log(address);
    let token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Pasa los headers como parte del objeto de opciones
    const options = { headers: headers };

    return this.http.put(address, {}, options);
  }



  //Agregar los detalles de actividad barrial

  postRegisterdetActividadBarrial(form: Partial<DetallActividadBarrialI>): Observable<any> {
    let address = this.url + "detalleactividadbarrial/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<DetallActividadBarrialI>(address, form, { headers: headers });
  }


  //Agregar Postulacion de proyectos

  postRegisterPostulacionProyecto(form: Partial<DetalleProyectoI>): Observable<any> {
    let address = this.url + "detalleproyecto/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<DetalleProyectoI>(address, form, { headers: headers });
  }


  //Solicitudes vecinales


  postRegisterSolicitudVecinal(form: Partial<SolicitudVecinalI>): Observable<any> {
    let address = this.url + "solicitudvecinal/save";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<SolicitudVecinalI>(address, form, { headers: headers });
  }


  putSolicitudVecinal(form: Partial<SolicitudVecinalI>, id: any): Observable<SolicitudVecinalI> {
    let address = this.url + "solicitudvecinal/update/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<SolicitudVecinalI>(address, form, { headers: headers });
  }


  getSingleSolicitudVecinal(id: any): Observable<SolicitudVecinalI[]> {
    let address = this.url + "solicitudvecinal/single/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SolicitudVecinalI[]>(address, { headers: headers });
  }



  getSingleSolicitudVecinalId(id: any): Observable<SolicitudVecinalI> {
    let address = this.url + "solicitudvecinal/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SolicitudVecinalI>(address, { headers: headers });
  }






  getAllSolicitudVecinal(): Observable<SolicitudVecinalI[]> {
    let address = this.url + "solicitudvecinal/listactividadvecinal";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<SolicitudVecinalI[]>(address, { headers: headers });
  }

  deleteSolicitudVecinal(id: any): Observable<any> {
    let address = this.url + "solicitudvecinal/delete/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete<any>(address, { headers: headers })
      .pipe(
        catchError(error => {
          console.error('Error al eliminar el Actividad Barrial.', error);
          throw error; // Puedes manejar el error de otra manera si es necesario
        })
      )
  }
}







