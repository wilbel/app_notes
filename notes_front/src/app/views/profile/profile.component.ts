import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router, private userapi: UserService, private route: ActivatedRoute, private apiService: ApiService) { }
  errorMessage: string | null = null;
  isAdmin: boolean = false; 

  registerUserForm = new FormGroup({
    id: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    identification_card: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    telf: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rol: new FormControl('', Validators.required)
  })

  ngOnInit(): void {

    let usersUsername = (localStorage.getItem('username'));
    this.userapi.getSingleUser(usersUsername).subscribe(data => {
      this.isAdmin = this.esAdmin(data?.rol);
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getUserSingleId(id);
    });
  }

  esAdmin(rol: string | null): any {
    console.log(rol);
    return rol === 'ADMIN';
  }

  getUserSingleId(id: any) {
    this.userapi.getSingleId(id).subscribe(data => {
      this.setValueForControl('firstName', data.firstName);
      this.setValueForControl('lastName', data.lastName);
      this.setValueForControl('identification_card', data.identification_card);
      this.setValueForControl('address', data.address);
      this.setValueForControl('email', data.email);
      this.setValueForControl('telf', data.telf);
      this.setValueForControl('status', data.status);
      this.setValueForControl('username', data.username);
      this.setValueForControl('rol', data.rol);
      this.setValueForControl('id', data.id);

    });
  }


  setValueForControl(controlName: string, value: any) {
    this.registerUserForm.get(controlName)?.setValue(value);
  }


  postUpdate(form: any) {

    console.log(form);

   if (!form.id || !form.firstName || !form.lastName || !form.identification_card || !form.address || !form.email || !form.telf ||  !form.username || !form.rol /*|| !form.password*/) {
      this.errorMessage =("Algunos campos del formulario están vacíos. No se realizará la actualización.");
      return;
    }

    console.log("id"+form.id);
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userapi.putUsers(form, id).subscribe
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
