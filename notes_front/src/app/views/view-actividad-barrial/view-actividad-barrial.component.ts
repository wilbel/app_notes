import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { UserService } from '../../services/user/user.service';
import { ActividadBarrialI } from '../../models/actividadBarrial.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-actividad-barrial',
  templateUrl: './view-actividad-barrial.component.html',
  styleUrl: './view-actividad-barrial.component.css'
})
export class ViewActividadBarrialComponent implements OnInit {


  constructor(private router: Router, private apinotice: ApiService, private api: UserService) { }

  actividadBarrial: ActividadBarrialI[] = [];
  ngOnInit(): void {
    this.showAllActividadBarrial();
  }
 
  viewActividadBarrial(id: any) {
    console.log("llega");
    this.router.navigate(['/edit_actividadbarrial', id]);
  }

  showAllActividadBarrial() {
    this.apinotice.getAllActividadesBarrial().subscribe(data => {
      console.log(data);
      this.actividadBarrial = data;
    });
  }
}
