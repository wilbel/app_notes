import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproyectos',
  templateUrl: './addproyectos.component.html',
  styleUrl: './addproyectos.component.css'
})
export class AddproyectosComponent implements OnInit {


  constructor(private apipro: ApiService, private api: UserService, private router: Router) { }

  registerProyectoForm = new FormGroup({
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
    presupuesto: new FormControl('', Validators.required),
    state: new FormControl('false', Validators.required),
  });



  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.getUserSingle(usersUsername);
  }

  getUserSingle(usersUsername: any) {
    this.api.getSingleUser(usersUsername).subscribe(data => {
      this.registerProyectoForm.get('users.id')?.setValue(data.id);
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerProyectoForm.get(controlName)?.setValue(value);
  }

  errorMessage: string | null = null;

  postRegisterProyectos(form: any) {

    if (!form.title || !form.description || !form.presupuesto ) {
      this.errorMessage = ("Algunos campos del formulario están vacíos.");
      return;
    }

    this.apipro.postRegisterProyectos(form).subscribe(
      (data) => {
        this.errorMessage = "Proyecto registrado con éxito.";

        // this.router.navigate(["downloads"]);
      },
      (error) => {
        console.error("Error al enviar la solicitud", error);
        this.errorMessage = "Error al registrar proyecto. Por favor, inténtalo de nuevo.";
      }
    );
  }

}
