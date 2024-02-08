import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NoticeComponent } from './views/notice/notice.component';
import { CertificadoResidenciaComponent } from './views/certificado-residencia/certificado-residencia.component';
import { ProfileComponent } from './views/profile/profile.component';
import { DownloadComponent } from './views/download/download.component';
import { ListaSolicitudesComponent } from './views/lista-solicitudes/lista-solicitudes.component';
import { VerificarSolicitudComponent } from './views/verificar-solicitud/verificar-solicitud.component';
import { ListausersComponent } from './views/listausers/listausers.component';
import { ShowNoticeComponent } from './views/show-notice/show-notice.component';
import { ListNoticeComponent } from './views/list-notice/list-notice.component';
import { AddproyectosComponent } from './views/addproyectos/addproyectos.component';
import { ListaproyectosComponent } from './views/listaproyectos/listaproyectos.component';
import { EditproyectosComponent } from './views/editproyectos/editproyectos.component';
import { AddActividadBarrialComponent } from './views/add-actividad-barrial/add-actividad-barrial.component';
import { ViewActividadBarrialComponent } from './views/view-actividad-barrial/view-actividad-barrial.component';
import { ListActividadBarrialComponent } from './views/list-actividad-barrial/list-actividad-barrial.component';
import { AddetctividadbarrialComponent } from './views/addetctividadbarrial/addetctividadbarrial.component';
import { PostularproyectoComponent } from './views/postularproyecto/postularproyecto.component';
import { ShowproyectosComponent } from './views/showproyectos/showproyectos.component';
import { ListSinglesolVecinalComponent } from './views/list-singlesol-vecinal/list-singlesol-vecinal.component';
import { ListSolicitudVecinalComponent } from './views/list-solicitud-vecinal/list-solicitud-vecinal.component';
import { AddSolicitudVecinalComponent } from './views/add-solicitud-vecinal/add-solicitud-vecinal.component';
import { EditsolicitudvecinalComponent } from './views/editsolicitudvecinal/editsolicitudvecinal.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notice', component: NoticeComponent },
  { path: 'solicitud_residencia', component: CertificadoResidenciaComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'downloads', component: DownloadComponent },
  { path: 'lista_solicitudes', component: ListaSolicitudesComponent },
  { path: 'view_solicitudes/:id', component: VerificarSolicitudComponent },
  { path: 'lista_users', component: ListausersComponent },
  { path: 'view_notice', component: ShowNoticeComponent },
  { path: 'lista_notice', component: ListNoticeComponent },
  { path: 'lista_proyectos', component: ListaproyectosComponent },
  { path: 'add_proyectos', component: AddproyectosComponent },
  { path: 'edit_proyectos/:id', component: EditproyectosComponent },
  { path: 'lista_actividadbarrial', component: ListActividadBarrialComponent },
  { path: 'add_actividadbarrial', component: AddActividadBarrialComponent },
  { path: 'show_actividadbarrial', component: ViewActividadBarrialComponent },
  { path: 'edit_actividadbarrial/:id', component: AddetctividadbarrialComponent },
  { path: 'postular_proyecto/:id', component: PostularproyectoComponent },
  { path: 'show_proyectos', component: ShowproyectosComponent },
  { path: 'lista_solicitudes_vecinal', component: ListSolicitudVecinalComponent },
  { path: 'lista_single_solicitud_vecinal/:id', component: ListSinglesolVecinalComponent  },
  { path: 'add_solicitud_vecinal', component: AddSolicitudVecinalComponent }  ,
  { path: 'editar_solicitud_vecinal/:id', component: EditsolicitudvecinalComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, DashboardComponent, RegisterComponent, NoticeComponent,
  CertificadoResidenciaComponent, ProfileComponent, DownloadComponent, ListaSolicitudesComponent,
  VerificarSolicitudComponent, ListausersComponent,
  ShowNoticeComponent,ListNoticeComponent,ListaproyectosComponent,
  AddproyectosComponent,EditproyectosComponent,ListActividadBarrialComponent,
  AddActividadBarrialComponent,
  ViewActividadBarrialComponent,AddetctividadbarrialComponent,
  PostularproyectoComponent,ShowproyectosComponent,
  ListSinglesolVecinalComponent,ListSolicitudVecinalComponent,AddSolicitudVecinalComponent,EditsolicitudvecinalComponent]
