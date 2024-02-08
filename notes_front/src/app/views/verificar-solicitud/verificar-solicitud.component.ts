import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { SolicitudResidenciaI } from '../../models/solicitudResidencia';

@Component({
  selector: 'app-verificar-solicitud',
  templateUrl: './verificar-solicitud.component.html',
  styleUrl: './verificar-solicitud.component.css'
})
export class VerificarSolicitudComponent implements OnInit {
  errorMessage: string | null = null;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  registerSolicitudForm = new FormGroup({
    id_user: new FormControl(''),
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
    nombres: new FormControl(''),
    identification_card: new FormControl(''),
    num_organization: new FormControl(''),
    name_organization: new FormControl(''),
    id_junta: new FormControl(''),

    juntaBarrial: new FormGroup({
      id: new FormControl(''),
      num_organization: new FormControl(''),
      name_organization: new FormControl(''),
      date_creation: new FormControl(''),
      name_president: new FormControl(''),
      name_secretary: new FormControl(''),
      name_treasurer: new FormControl(''),
      name_vocals: new FormControl(''),
      others: new FormControl('')

    }),
    certified_number: new FormControl('', Validators.required),
    commune: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
    detail: new FormControl('', Validators.required),
    streets: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    state: new FormControl(''),
    stateview: new FormControl('')
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getViewSolicitudResidencia(id);
    });
  }

  getViewSolicitudResidencia(id: any) {
    this.apiService.getSolicitudResidencia(id).subscribe(data => {
      this.setValueForControl('id_junta', data.juntaBarrial.id);
      this.setValueForControl('nombres', data.users.firstName + " " + data.users.lastName);
      this.setValueForControl('identification_card', data.users.identification_card);
      this.setValueForControl('id_user', data.users.id);
      this.setValueForControl('num_organization', data.juntaBarrial.num_organization);
      this.setValueForControl('name_organization', data.juntaBarrial.name_organization);
      this.setValueForControl('certified_number', data.certified_number);
      this.setValueForControl('date', data.date);
      this.setValueForControl('sector', data.sector);
      this.setValueForControl('commune', data.commune);
      this.setValueForControl('streets', data.streets);
      this.setValueForControl('state', data.state);
      this.registerSolicitudForm.get('users.id')?.setValue(data.users.id);
      this.registerSolicitudForm.get('juntaBarrial.id')?.setValue(data.juntaBarrial.id);

    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerSolicitudForm.get(controlName)?.setValue(value);
  }

  UpdateSolicitudResidencia(form: any) {
    console.log(form);
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiService.putSolResidencia(form, id).subscribe
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


