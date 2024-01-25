import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginDetails = {
    mail: '',
    password: ''

  };

  constructor(private authService: AuthService, private router: Router) { }

  submitForm() {
    this.authService.loginUser(this.loginDetails).subscribe(
      (response) => {
        const authToken = response.token;

        this.authService.setToken(authToken);

        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('Error al iniciar sesión: ', error);
      }
    );
  }
}
