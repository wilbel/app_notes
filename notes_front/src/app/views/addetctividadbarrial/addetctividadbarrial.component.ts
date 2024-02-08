import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addetctividadbarrial',
  templateUrl: './addetctividadbarrial.component.html',
  styleUrl: './addetctividadbarrial.component.css'
})
export class AddetctividadbarrialComponent {


  errorMessage: string | null = null;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  registerDetActividadForm = new FormGroup({
    id: new FormControl(''),
    actividadBarrial: new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      place: new FormControl(''),
      cupos: new FormControl(''),
      cost: new FormControl(''),
      date: new FormControl('')
    }),

    users: new FormGroup({
      id: new FormControl(''),
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
      rol: new FormControl('USER')
    }),
    date_inscription: new FormControl(''),
    detalle_inscription: new FormControl('')
  });


  title: string | null = null;
  description: string | null = null;
  presupuesto: string | null = null;
  fecha: string | null = null;
  lugar: string | null = null;
  cupos: string | null = null;



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getViewActividad(id);
    });
  }

  getViewActividad(id: any) {
    this.apiService.getSingleActividadBarrial(id).subscribe(data => {
      this.title = data.title;
      this.description = data.description;
      this.presupuesto = data.cost;
      this.fecha = data.date;
      this.lugar = data.place;
      this.cupos = data.cupos;
      this.setValueForControl('date_inscription', this.obtenerFechaActual());
      this.registerDetActividadForm.get('users.id')?.setValue(data.users.id);
      this.registerDetActividadForm.get('actividadBarrial.id')?.setValue(data.id);
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerDetActividadForm.get(controlName)?.setValue(value);
  }

  obtenerFechaActual() {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().split('T')[0];
    return fechaFormateada;
  }

  postRegisterDetActividadBarrial(form: any) {
    this.apiService.postRegisterdetActividadBarrial(form).subscribe(
      (data) => {

        console.log(data.actividadBarrial.id);
        //disminuir la cantidad de cupos de actividad barrial
        this.decreaseCupo(data.actividadBarrial.id);
        this.errorMessage = "Registrado con éxito.";

        // this.router.navigate(["downloads"]);
      },
      (error) => {
        console.error("Error al enviar la solicitud", error);
        this.errorMessage = "Error al registrar. Por favor, inténtalo de nuevo.";
      }
    );
  }



  decreaseCupo(actividadId: any): void {
    const subscription = this.apiService.decreaseCupo(actividadId).subscribe(
      (result) => {
        console.log('Cupo disminuido con éxito:', result);
        // Puedes realizar acciones adicionales según el resultado
      },
      (error) => {
        console.error('Error al disminuir el cupo:', error);
      }
    );

  }
  

 
}
