import { Component, OnInit } from '@angular/core';
import { authService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  
  isLoggedIn: boolean = false;

  constructor(private authService: authService, private router: Router) {}

  ngOnInit() {
    // Verificar si el usuario está autenticado al cargar la página
    this.checkAuthentication();
  }

  checkAuthentication() {
    // Utiliza el servicio para verificar si el usuario está autenticado
    this.isLoggedIn = this.authService.isLoggedIn();

    // Si el usuario está autenticado, redirige a la página de perfil
    if (this.isLoggedIn) {
      this.router.navigate(['/home']);
    }
  }
}
