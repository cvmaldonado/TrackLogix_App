import { Component } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  userDetails = {
    name: '',
    last_name: '',
    mail: '',
    password: '',
    phone_number: ''
    // Agrega otros campos según tu API y requisitos
  };

  constructor(private registerService: RegisterService) {}

  submitForm() {
    this.registerService.register(this.userDetails).subscribe(
      (res) => {
        console.log('Registro exitoso:', res);
        // Puedes redirigir a otra página o realizar otras acciones después del registro exitoso
      },
      (err) => {
        console.error('Error durante el registro:', err);
        // Manejar errores del servidor, mostrar mensajes de error, etc.
      }
    );
  }
}
