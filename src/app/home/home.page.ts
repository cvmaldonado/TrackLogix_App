import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  //Se verifica si el usuario ya se encuentra autenticado
  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
  goToHomePage() {
    this.router.navigate(['/home']);
  }

}
