import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginI } from '../../models/login.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['dashboard']);
    } 
  }


  mensajesError: string[] = [];
  onLogin(form: Partial<LoginI>) {

    this.api.loginUser(form).subscribe(data => {
      console.log(data);
      if (data.success) {

        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.username);


        this.router.navigate(["dashboard"]);
      } else {
        this.mensajesError = data.errorMessages;
      }
    })
  }
}
