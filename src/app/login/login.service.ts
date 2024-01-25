import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private backendAPIs = 'localhost:3000/'; // Se asigna la ruta del servidor de nodejs

  constructor(private http: HttpClient) {}

  loginUser(loginDetails: any): Observable<any> {
    const loginEndpoint = 'api/login'; // Se asigna la ruta para consumir el API de registro desde nodejs

    // Realizar la solicitud POST al backend
    return this.http.post(`${this.backendAPIs}${loginEndpoint}`, loginDetails);
  }
}