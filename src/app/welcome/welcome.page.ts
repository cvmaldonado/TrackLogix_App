import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  constructor( private router: Router) { }

  redirectToRegisterPage() {
    this.router.navigateByUrl('/register');
  }

  redirectToLoginPage() {
    this.router.navigateByUrl('/login');
  }

}
