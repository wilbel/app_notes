import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { UsersI } from '../../models/users.interface';
@Component({
  selector: 'app-listausers',
  templateUrl: './listausers.component.html',
  styleUrl: './listausers.component.css'
})
export class ListausersComponent implements OnInit {

  usuarios: UsersI[] = [];
  constructor(private router: Router, private apiuser: UserService) { }

  ngOnInit(): void {
    this.showAllUsers();
  }

  showAllUsers() {
    this.apiuser.getAllUsers().subscribe(data => {
      console.log(data);
      this.usuarios = data;
    });
  }


  viewUser(id: any) {
    this.router.navigate(['/profile', id]);
  }

}


