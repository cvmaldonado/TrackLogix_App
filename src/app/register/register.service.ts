import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private backendAPIs = 'http://localhost:3000/';  // ajusta la URL base según tu configuración

  constructor(private http: HttpClient) { }

  register(userDetails: any): Observable<any> {
    const registerEndpoint = 'api/register';  // ajusta la ruta específica según tu API

    // Realizar la solicitud POST al backend
    return this.http.post(`${this.backendAPIs}${registerEndpoint}`, userDetails);
  }
}
