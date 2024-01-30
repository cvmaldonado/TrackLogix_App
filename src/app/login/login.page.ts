// login.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isAlertOpen = false;
  alertButtons = ['Ok'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  userDetails = {
    mail: '',
    password: ''
  };

  constructor(private authService: authService, private router: Router) { }

  loginUser() {
    this.authService.loginUser(this.userDetails).subscribe(
      (data: any) => {
        console.log(data); // Se Imprimen los datos para verificar su estructura

        if (data && data.token) { 
          this.authService.setToken(data.token); // Guarda el token en el almacenamiento local
          this.router.navigateByUrl('/home');
          console.log('Token obtenido')
        } else {
          console.error('Error: No se recibió el token');

        }
      },
      (error) => {
        this.isAlertOpen = true;
        console.error('Error:', error);
      }
    );
  }
}