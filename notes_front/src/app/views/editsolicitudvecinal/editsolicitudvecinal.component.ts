import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editsolicitudvecinal',
  templateUrl: './editsolicitudvecinal.component.html',
  styleUrl: './editsolicitudvecinal.component.css'
})
export class EditsolicitudvecinalComponent {
  errorMessage: string | null = null;

  constructor(private apipro: ApiService, private api: UserService, private route: ActivatedRoute) { }

  editSolicitudesBarrialesForm = new FormGroup({
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


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getViewProyecto(id);
    });
  }


  getViewProyecto(id: any) {
    this.apipro.getSingleSolicitudVecinalId(id).subscribe(data => {
      console.log(data);

      this.setValueForControl('solicitantes', data.solicitantes);
      this.setValueForControl('title', data.title);
      this.setValueForControl('description', data.description);
      this.setValueForControl('date_solicitud',  data.date_solicitud);
      this.setValueForControl('place', data.place);
      this.setValueForControl('state', data.state);
      this.editSolicitudesBarrialesForm.get('users.id')?.setValue(data.users.id);
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.editSolicitudesBarrialesForm.get(controlName)?.setValue(value);
  }


  putSolicitudesVecinal(form: any) {
    console.log(form);
     this.route.params.subscribe(params => {
       const id = params['id'];
       this.apipro.putSolicitudVecinal(form, id).subscribe
         (data => {
           console.log("Actualizado con éxito");
           this.errorMessage = "Actualizado con éxito.";
         },
           (error) => {
             this.errorMessage = "Error al editar. Por favor, inténtalo de nuevo.";
           }
         )
     });
  }

}
