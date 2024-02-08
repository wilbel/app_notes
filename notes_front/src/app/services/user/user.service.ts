import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersI } from '../../models/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://localhost:5003/"
  constructor(private http: HttpClient) { }


  getSingleUser(username: any): Observable<UsersI> {
    let address = this.url + "users/find/" + username;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<UsersI>(address, { headers: headers });
  }

  getSingleId(id: any): Observable<UsersI> {
    let address = this.url + "users/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<UsersI>(address, { headers: headers });
  }

  getAllUsers(): Observable<UsersI[]> {
    let address = this.url + "users/listausers";
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<UsersI[]>(address, { headers: headers });
  }

  countUsers(): Observable<number> {
    const url = this.url + "users/count";
    let token = (localStorage.getItem('token'));

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>(url, { headers: headers });
  }


  putUsers(form: Partial<UsersI>, id: any): Observable<UsersI> {
    let address = this.url + "users/update/" + id;
    let token = (localStorage.getItem('token'));
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put<UsersI>(address, form, { headers: headers });
  }


  logout() {
    localStorage.removeItem('token');
  }

  countSolicitudResidencia(): Observable<number> {
    const url = this.url + "solicitudresidencia/count/false";
    let token = (localStorage.getItem('token'));

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<number>(url, { headers: headers });
  }

  //Dar de baja un usuario






}
