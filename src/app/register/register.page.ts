import { Component } from '@angular/core';
import { authService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  confirmPassword: String = '';
  isPassMatchAlert: boolean = false;
  isAlertOpen = false;
  alertButtons = ['Aceptar'];

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
  userDetails = {
    name: '',
    last_name: '',
    code: '',
    mail: '',
    phone_number: '',
    password: ''
  };

  constructor(private authService: authService, private router: Router ) { }

  registerUser() {
    if (this.isFormValid()) {
      if (this.userDetails.password === this.confirmPassword) {
        this.authService.registerUser(this.userDetails).subscribe(
          (data) => {
            console.log(data);
            this.router.navigateByUrl('/login');
          },
          (error) => {
            this.isAlertOpen = true;
            console.error('Error:', error);
          }
        );
      } else {
        this.isPassMatchAlert = true;
        console.error('Las contraseñas no coinciden');
      }
    } else {
      this.isAlertOpen = true;
      console.error('Por favor, complete todos los campos');
    }
  }  

isFormValid(): boolean {
  return !!(
    this.userDetails.name &&
    this.userDetails.last_name &&
    this.userDetails.mail &&
    this.userDetails.phone_number &&
    this.userDetails.password
  );
}

  redirectToLoginPage() {
    this.router.navigateByUrl('/login');
  }
  
}

