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

  getCurrentLocalTime(): string {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric', 
      hour12: false 
    };
    return now.toLocaleTimeString(undefined, options);
  }
}
