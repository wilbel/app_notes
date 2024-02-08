import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { NoticeI } from '../../models/notice.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  totalUsers: number | null = null;
  totalSolicitudesResidencia: number | null = null;
  notice: NoticeI[] = [];
  isAdmin: boolean = false; // Agrega una propiedad para almacenar si es administrador
  nombreUser: String = "";
  rol: string | null = null;
  constructor(private userService: UserService,private api : ApiService ) { }


  ngOnInit(): void {
    this.countSolicitudesResidenciaPorAtender();
    this.countUsers();
    this.showAllNotice();


    let usersUsername = (localStorage.getItem('username'));
    this.userService.getSingleUser(usersUsername).subscribe(data => {
      this.rol = data.rol;
      this.nombreUser = data?.firstName + " " + data?.lastName;
      this.isAdmin = this.esAdmin(data?.rol);
    });
  }

  esAdmin(rol: string | null): any {
    console.log(rol);
    return rol === 'ADMIN';
  }
  countUsers() {
    this.userService.countUsers().subscribe(
      (result) => {
       
        this.totalUsers = result;
      },
      (error) => {
        console.error('Error al obtener el total de usuarios.', error);
      }
    );
  }

  countSolicitudesResidenciaPorAtender() {

    this.userService.countSolicitudResidencia().subscribe(
      (result) => {
        
        this.totalSolicitudesResidencia = result;
      },
      (error) => {
        console.error('Error al obtener el total de Solicitudes.', error);
      }
    );

  }


  showAllNotice() {
    this.api.getAllNotice().subscribe(data => {
      console.log(data);
      this.notice = data;
    });
  }


}
