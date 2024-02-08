import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.css'
})
export class NoticeComponent implements OnInit {

  previewImage: string | undefined;
  selectedImage: File | null = null;


  constructor(private apinotice: ApiService, private api: UserService, private router: Router) { }

  registerNoticeForm = new FormGroup({
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
    date: new FormControl('', Validators.required),
    reminder_date: new FormControl('', Validators.required),
    image: new FormControl('')
  });


  ngOnInit(): void {
    let usersUsername = (localStorage.getItem('username'));
    this.getUserSingle(usersUsername);
  }

  handleImageChange(event: any): void {
    const file = event.target.files[0];
    console.log(file);
    this.selectedImage = file;

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewImage = e.target.result;
        const base64Image = e.target.result.split(',')[1];
        this.registerNoticeForm.get('image')?.setValue(base64Image);
        //console.log(base64Image);
      };
      reader.readAsDataURL(file);
    }
  }



  getUserSingle(usersUsername: any) {
    this.api.getSingleUser(usersUsername).subscribe(data => {
      this.registerNoticeForm.get('users.id')?.setValue(data.id);
      this.setValueForControl('date', this.obtenerFechaActual());
      this.setValueForControl('reminder_date', this.obtenerFechaActual());
    });
  }

  setValueForControl(controlName: string, value: any) {
    this.registerNoticeForm.get(controlName)?.setValue(value);
  }

  obtenerFechaActual() {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString().split('T')[0];
    return fechaFormateada;
  }

  errorMessage: string | null = null;


  postRegisterNotice(form: any): void {

    if (!form.title || !form.description) {
      this.errorMessage = ("Algunos campos del formulario están vacíos. No se realizará la actualización.");
      return;
    }

   ;

    this.apinotice.postRegisterNotice(form).subscribe(
      (response) => {
        this.errorMessage = 'Noticia creada exitosamente';
      },
      (error) => {
        this.errorMessage = 'Error al crear noticia';
      }
    );

  }


}
