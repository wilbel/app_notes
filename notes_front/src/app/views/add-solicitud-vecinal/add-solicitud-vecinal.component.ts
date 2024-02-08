import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-solicitud-vecinal',
  templateUrl: './add-solicitud-vecinal.component.html',
  styleUrl: './add-solicitud-vecinal.component.css'
})
export class AddSolicitudVecinalComponent {

  constructor(private apipro: ApiService, private api: UserService, private route: Router) { }

  registerSolicitudesBarrialesForm = new FormGroup({
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

    solicitantes: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    place: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    monto: new FormControl('0'),
    state: new FormControl('false'),
    date_solicitud: new FormControl('', Validators.required),
    date_ejecucion: new FormControl('')
  });

  id_user: string | null = null;

  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.getUserSingle(usersUsername);


  }

  getUserSingle(usersUsername: any) {
    this.api.getSingleUser(usersUsername).subscribe(data => {
      this.registerSolicitudesBarrialesForm.get('users.id')?.setValue(data.id);
      this.setValueForControl('date_solicitud', this.obtenerFechaActual());
      this.id_user = data.id;
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerSolicitudesBarrialesForm.get(controlName)?.setValue(value);
  }

  obtenerFechaActual() {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().split('T')[0];
    return fechaFormateada;
  }

  errorMessage: string | null = null;
  postRegisterSolicitudesVecinal(form: any) {
    this.apipro.postRegisterSolicitudVecinal(form).subscribe(
      (data) => {
        this.errorMessage = "Solicitud registrada con éxito.";
        // this.router.navigate(["downloads"]);
      },
      (error) => {
        console.error("Error al enviar la solicitud", error);
        this.errorMessage = "Error al registrar Solicitud. Por favor, inténtalo de nuevo.";
      }
    );
  }
}
