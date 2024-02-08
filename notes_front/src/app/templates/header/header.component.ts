import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  constructor(private router: Router) { }

  redirectToNotice() {
    this.router.navigate(['notice']);
  }

  redirectToRegister() {
    this.router.navigate(['register']);
  }

  redirectToSession() {
    this.router.navigate(['login']);
  }

}
