import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { SolicitudResidenciaI } from '../../models/solicitudResidencia';



import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-lista-solicitudes',
  templateUrl: './lista-solicitudes.component.html',
  styleUrl: './lista-solicitudes.component.css'
})
export class ListaSolicitudesComponent {




  solicitudesDeResidencia: SolicitudResidenciaI[] = [];
  errorMessage: string | null = null;
  constructor(private router: Router, private apiservicio: ApiService) { }

  ngOnInit(): void {
    this.showAllSolicitudes();
  }

  showAllSolicitudes() {
    this.apiservicio.getAllSolResidencia().subscribe(data => {
      this.solicitudesDeResidencia = data;
    });
  }

  viewSolResidencia(id: any) {
    this.router.navigate(['/view_solicitudes', id]);
  }

  deleteSolResidencia(id: any) {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmDelete) {
      this.apiservicio.deleteSolResidencia(id).subscribe(
        response => {
          this.showAllSolicitudes();
          console.log("Eliminado con exito");
          this.errorMessage = "Eliminado con éxito.";
        },
        error => {
          this.errorMessage = "Error al eliminar la solicitud de residencia.";
          console.error('Error al eliminar la solicitud de residencia:', error);
        }
      );
    }
  }


  imprimirSolResidencia(id: any) {
    const doc = new jsPDF();

    this.apiservicio.getSolicitudResidencia(id).subscribe(data => {
      console.log(data);



      doc.text('Junta de Vecinos N°' + data.juntaBarrial.num_organization + " " + data.juntaBarrial.name_organization, 10, 10);
      doc.text('' + data.commune, 10, 20);
      doc.setFont('helvetica', 'bold');
      doc.text('Certificado de Residencia', 10, 30);
      doc.setFont('helvetica', 'normal');
      doc.text('' + data.juntaBarrial.name_president + ", en calidad de Presidente de la junta de vecinos N°" + data.juntaBarrial.num_organization, 10, 40);
      doc.text('del sector ' + data.sector + " , de la comuna " + data.commune + ".", 10, 50);
      doc.setFont('helvetica', 'bold');
      doc.text('CERTIFICA', 10, 70);
      doc.setFont('helvetica', 'normal');

      doc.text('Que ' + data.users.firstName + " " + data.users.lastName + ", Cédula Nacional de Identidad " + data.users.identification_card, 10, 80);
      doc.text('registra su domicilio particular en ' + data.streets + ', en la comuna ' + data.commune, 10, 90);
      doc.text('ubicado en el territorio donde esta Junta de Vecinos desarrolla sus funciones.', 10, 100);
      doc.text("La persona solicitante declara que la información entregada para emitir el", 10, 110);
      doc.text('presente certificado es fidedigna.', 10, 120);
      doc.text('Se extiende el presente certificado a petición de la persona interesada ', 10, 130);
      doc.text('para realizar cualquier trámite.', 10, 140);

     /* doc.text('-----------------------------', 10, 170);
      doc.text('FIRMA', 10, 180);
      doc.text('PRESIDENTE', 10, 190);
      doc.text('' + data.juntaBarrial.name_president, 10, 200);*/


      let y = 170; // Definir la posición inicial en el eje y
      const maxWidth = doc.internal.pageSize.getWidth(); 


      const lineCenterX = maxWidth / 3;
      doc.text('-----------------------------', lineCenterX, y);
      y += 10;
      doc.text('FIRMA', lineCenterX, y);
      y += 10;
      doc.text('PRESIDENTE', lineCenterX, y);
      y += 10;
      doc.text('' + data.juntaBarrial.name_president, lineCenterX, y);
      y += 10;
      doc.save(`solicitud_${id}.pdf`);

    });

  }





}
