import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private backendAPIs = 'http://localhost:3000/'; // Se asigna la ruta del servidor de nodejs
  private authToken = 'auth_token'; // Se asigna el nombre del token que se almacenará en el localStorage


  constructor(private http: HttpClient) { }

  loginUser(loginDetails: any): Observable<any> {
    return this.http.post(`${this.backendAPIs}api/login`, loginDetails); 
  }

  // Se crea el método para almacenar el token en el localStorage
  setToken(token: string): void {
    localStorage.setItem(this.authToken, token);
  }

  // Se crea el método para obtener el token que ya se encuentra almacenado en el localStorage
  getToken(): string | null {
    return localStorage.getItem(this.authToken);
  }

  // Se verifica si el usuario ya se encuentra autenticado
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token; // Si el token existe, retorna true, de lo contrario retorna false
  }

  //Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.authToken);
  }
}
