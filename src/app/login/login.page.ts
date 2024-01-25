import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  submitForm() {
    // Se realiza el envío del formulario
    console.log('Formulario enviado:', this.loginDetails);
  }
}
