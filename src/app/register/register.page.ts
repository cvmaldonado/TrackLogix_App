import { Component } from '@angular/core';
import { authService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
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
    if(this.isFormValid()){
    this.authService.registerUser(this.userDetails).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl('/login'); // redirige a la página de inicio de sesión
        
      },
      (error) => {
        this.isAlertOpen = true;
        console.error('Error SISISISI:', error);
        
      }
    );
  } else {
    this.isAlertOpen = true;
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

