import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-menu-user',
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.css'
})
export class MenuUserComponent implements OnInit {

  constructor(private router: Router, private apiuser: UserService) { }

  isAdmin: boolean = false; // Agrega una propiedad para almacenar si es administrador
  nombreUser: String = "";
  rol: string | null = null;
  isMobile: boolean = false;
  sidebarCollapsed = false;
  codigo_user :string | null = null;
  ngOnInit(): void {

    let usersUsername = (localStorage.getItem('username'));
    console.log(usersUsername);
    this.apiuser.getSingleUser(usersUsername).subscribe(data => {
      console.log(data);
      this.rol = data.rol;
      this.nombreUser = data?.firstName + " " + data?.lastName;
      this.isAdmin = this.esAdmin(data?.rol);
      this.codigo_user = data?.id;
    });

    this.checkLocalStorage();

  }

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }



  logout() {
    this.apiuser.logout();
    this.router.navigate(['/login']);
  }

  checkLocalStorage() {
    if (localStorage.getItem('token')) {
      //this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
  }

  esAdmin(rol: string | null): any {
    console.log(rol);
    return rol === 'ADMIN';
  }

  redirectToSolicitudResidencia() {
    this.router.navigate(['solicitud_residencia']);
  }
  redirectToProfile(id: any) {  
    console.log(id);
    this.router.navigate(['profile', id]);
  }

  redirectToDownload() {
    this.router.navigate(['downloads']);
  }

  redirectToListaSolicitudes() {
    this.router.navigate(['lista_solicitudes']);
  }

  redirectToListaUsers() {
    this.router.navigate(['lista_users']);
  }

  redirectToNotice() {
    this.router.navigate(['notice']);
  }

  redirectToShowNotice() {
    this.router.navigate(['view_notice']);
  }

  redirectToActividadBarrial() {
    this.router.navigate(['add_actividadbarrial']);
  }

  redirectToShowActividadBarrial() {
    this.router.navigate(['show_actividadbarrial']);
  }

  redirectToShowProyectos() {
    this.router.navigate(['show_proyectos']);
  }

  redirectToAddSolicitudVecinal() {
    this.router.navigate(['add_solicitud_vecinal']);
  }

  redirectToListaSolicitudesVecinales() {
    this.router.navigate(['lista_solicitudes_vecinal']);
  }

  redirectTodashboard() {
    this.router.navigate(['dashboard']);
  }

  redirectToRegisterProyecto() {
    this.router.navigate(['add_proyectos']);
  }

  
}
