import { Injectable } from '@angular/core';
import { LoginI } from '../../models/login.interface';
import { RegisterI } from '../../models/register.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "http://localhost:5003/"
  constructor(private http: HttpClient) { }

  loginUser(form: Partial<LoginI>): Observable<any> {
    let address = this.url + "auth/login";
    return this.http.post<LoginI>(address, form);
  }

  postRegisterUser(form: Partial<RegisterI>): Observable<any> {
    let address = this.url + "auth/register";
    return this.http.post<RegisterI>(address, form);
  }

}
