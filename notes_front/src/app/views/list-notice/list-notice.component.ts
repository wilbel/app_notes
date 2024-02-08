import { Component } from '@angular/core';
import { NoticeI } from '../../models/notice.interface';
import { ApiService } from '../../services/api/api.service';


@Component({
  selector: 'app-list-notice',
  templateUrl: './list-notice.component.html',
  styleUrl: './list-notice.component.css'
})
export class ListNoticeComponent {
  constructor(private apinotice: ApiService) { }
  notice: NoticeI[] = [];
  errorMessage: string | null = null;
  ngOnInit(): void {
    this.showAllNotice();
  }

  showAllNotice() {
    this.apinotice.getAllNotice().subscribe(data => {
      console.log(data);
      this.notice = data;
    });
  }

  
  deleteNotice(id:any){
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar este elemento?');
    if (confirmDelete) {
      this.apinotice.deleteNotice(id).subscribe(
        response => {
          this.showAllNotice();
          console.log("Eliminado con exito");
          this.errorMessage = "Eliminado con éxito.";
        },
        error => {
          this.errorMessage = "Error al eliminar la solicitud vecinal.";
          console.error('Error al eliminar la solicitud vecinal:', error);
        }
      );
    }
  }

  getBase64Image(imageData: Uint8Array | string): string {
    if (imageData instanceof Uint8Array) {
      try {
        const base64Image = btoa(String.fromCharCode.apply(null, Array.from(imageData)));
        console.log('Base64 Image:', 'data:image/png;base64,' + base64Image);

        return 'data:image/png;base64,' + base64Image;
      } catch (error) {
        console.error('Error converting Uint8Array to Base64:', error);
      }
    } else {
      // Manejar el caso en el que imageData no es un Uint8Array (por ejemplo, podría ser una URL)
      return imageData as string;
    }
  
    return '';
  }
  
  

}
