import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { UsersI } from '../../models/users.interface';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { SolicitudResidenciaI } from '../../models/solicitudResidencia';
@Component({
  selector: 'app-certificado-residencia',
  templateUrl: './certificado-residencia.component.html',
  styleUrl: './certificado-residencia.component.css'
})
export class CertificadoResidenciaComponent implements OnInit {

  constructor(private apiJunta: ApiService, private api: UserService, private router: Router,private fb: FormBuilder) { }

  registerSolicitudForm = new FormGroup({
    id_user: new FormControl(''),
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
    nombres: new FormControl(''),
    identification_card: new FormControl(''),
    num_organization: new FormControl(''),
    name_organization: new FormControl(''),
    id_junta: new FormControl(''),
    juntaBarrial: new FormGroup({
      id: new FormControl('')
    }),
    certified_number: new FormControl('', Validators.required),
    commune: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    streets: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    state: new FormControl('false')
  });

  
  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.getUserSingle(usersUsername);
    this.getJuntaSingle(1);
  }

  getJuntaSingle(id: any) {
    this.apiJunta.getSingleJunta(id).subscribe(data => {
      this.setValueForControl('id_junta', data.id);
      this.registerSolicitudForm.get('juntaBarrial.id')?.setValue(data.id);
      this.setValueForControl('num_organization', data.num_organization);
      this.setValueForControl('name_organization', data.name_organization);
    });
  }
  setValueForControl(controlName: string, value: any) {
    this.registerSolicitudForm.get(controlName)?.setValue(value);
  }

  getUserSingle(usersUsername: any) {
    this.api.getSingleUser(usersUsername).subscribe(data => {
      this.setValueForControl('id_user', data.id);
      this.registerSolicitudForm.get('users.id')?.setValue(data.id);
      this.setValueForControl('nombres', `${data.firstName} ${data.lastName}`);
      this.setValueForControl('identification_card', data.identification_card);
      this.setValueForControl('certified_number', this.generarNumeroAleatorio().toString());
      this.setValueForControl('date', this.obtenerFechaActual());
    });
  }

  generarNumeroAleatorio() {
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  }

  obtenerFechaActual() {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().split('T')[0];
    return fechaFormateada;
  }


  errorMessage: string | null = null;
  postRegisterSolicitud(form: any) {
    this.apiJunta.postRegisterSolResidencia(form).subscribe(
      (data) => {
        console.log("Solicitud enviada");
        this.router.navigate(["downloads"]);
      },
      (error) => {
        console.error("Error al enviar la solicitud", error);
        this.errorMessage = "Error al enviar la solicitud. Por favor, inténtalo de nuevo.";
      }
    );
  }
}
