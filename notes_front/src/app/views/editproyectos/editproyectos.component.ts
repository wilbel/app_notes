import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editproyectos',
  templateUrl: './editproyectos.component.html',
  styleUrl: './editproyectos.component.css'
})
export class EditproyectosComponent {



  errorMessage: string | null = null;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
  
  registerProyectoForm = new FormGroup({
   
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
    title: new FormControl(''),
    description: new FormControl(''),
    presupuesto: new FormControl(''),
    state: new FormControl('')
    
  });


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getViewProyecto(id);
    });
  }


  getViewProyecto(id: any) {
    this.apiService.getSingleProeycto(id).subscribe(data => {
     this.setValueForControl('title', data.title);
      this.setValueForControl('description', data.description);
      this.setValueForControl('presupuesto', data.presupuesto);
      this.setValueForControl('state', data.state);
      this.registerProyectoForm.get('users.id')?.setValue(data.users.id);
    });
  }



  setValueForControl(controlName: string, value: any) {
    this.registerProyectoForm.get(controlName)?.setValue(value);
  }

  UpdateProyecto(form: any) {
    console.log(form);
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.apiService.putProyecto(form, id).subscribe
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
