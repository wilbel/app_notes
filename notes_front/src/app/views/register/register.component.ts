import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterI } from '../../models/register.interface';
import { AuthService } from '../../services/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    identification_card :new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(private api: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  mensajesError: string[] = [];

  postRegister(form: Partial<RegisterI>) {
    this.api.postRegisterUser(form).subscribe(data => {
      if (data.success) {
        this.router.navigate(['login']);
      } else {
        this.mensajesError = data.errorMessages;
      }
      console.log(data);
    })
  }

}
