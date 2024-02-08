import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-actividad-barrial',
  templateUrl: './add-actividad-barrial.component.html',
  styleUrl: './add-actividad-barrial.component.css'
})
export class AddActividadBarrialComponent implements OnInit {

  constructor(private apipro: ApiService, private api: UserService, private route: Router) { }

  registerActividadesForm = new FormGroup({
    id: new FormControl(''),
    users: new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      birthdate: new FormControl(''),
      age: new FormControl(''),
      identification_card: new FormControl(''),
      status: new FormControl(''),
      address: new FormControl(''),
      image: new FormControl(''),
      description: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      password: new FormControl(''),
      rol: new FormControl('USER')  // Puedes ajustar el valor según tus necesidades
    }),

    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    cupos: new FormControl('', Validators.required),
    cost: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)

  });

  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.getUserSingle(usersUsername);
  }

  getUserSingle(usersUsername: any) {
    this.api.getSingleUser(usersUsername).subscribe(data => {
      this.registerActividadesForm.get('users.id')?.setValue(data.id);
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerActividadesForm.get(controlName)?.setValue(value);
  }

  errorMessage: string | null = null;
  postRegisterActividadBarrial(form: any) {
    this.apipro.postRegisterActividadBarrial(form).subscribe(
      (data) => {
        this.errorMessage = "Actividad registrada con éxito.";
        // this.router.navigate(["downloads"]);
      },
      (error) => {
        console.error("Error al enviar la solicitud", error);
        this.errorMessage = "Error al registrar Actividad. Por favor, inténtalo de nuevo.";
      }
    );
  }

}
