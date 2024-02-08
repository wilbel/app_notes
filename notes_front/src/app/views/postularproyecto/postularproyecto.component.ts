import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-postularproyecto',
  templateUrl: './postularproyecto.component.html',
  styleUrl: './postularproyecto.component.css'
})
export class PostularproyectoComponent {

  errorMessage: string | null = null;
  constructor(private router: Router, private userapi: UserService, private route: ActivatedRoute, private apiService: ApiService) { }

  registerDetProyectoForm = new FormGroup({
    id: new FormControl(''),

    proyectos: new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      presupuesto: new FormControl(''),
      state: new FormControl(''),
    }),

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
    detalle_inscription: new FormControl('', Validators.required),
    anio_experiencia: new FormControl('', Validators.required),
    disponibilidad: new FormControl('', Validators.required),
    date_inscription: new FormControl(''),

  });

  title: string | null = null;
  description: string | null = null;
  presupuesto: string | null = null;
  state: string | null = null;

  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.getUserSingle(usersUsername);
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getViewProyecto(id);
    });
  }

  getUserSingle(usersUsername: any) {
    this.userapi.getSingleUser(usersUsername).subscribe(data => {
      console.log(data);
      this.registerDetProyectoForm.get('users.id')?.setValue(data.id);
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerDetProyectoForm.get(controlName)?.setValue(value);
  }

  getViewProyecto(id: any) {
    this.apiService.getSingleProeycto(id).subscribe(data => {
      this.title = data.title;
      this.description = data.description;
      this.presupuesto = data.presupuesto;
      this.registerDetProyectoForm.get('proyectos.id')?.setValue(data.id);
      this.setValueForControl('date_inscription', this.obtenerFechaActual());
    });
  }

  obtenerFechaActual() {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().split('T')[0];
    return fechaFormateada;
  }

  postRegisterDetProyecto(form: any) {

    if (!form.detalle_inscription || !form.anio_experiencia || !form.disponibilidad ) {
      this.errorMessage = ("Algunos campos del formulario están vacíos.");
      return;
    }

    this.apiService.postRegisterPostulacionProyecto(form).subscribe(
      (data) => {
        console.log("Postulación enviada");
          this.errorMessage = "Postulación enviada.";
      
      },
      (error) => {
        console.error("Error al enviar postulación", error);
        this.errorMessage = "Error al enviar postulación. Por favor, inténtalo de nuevo.";
      }
    );
  }

}
