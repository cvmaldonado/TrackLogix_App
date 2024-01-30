import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface userData {
  mail: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class authService {
  private backendAPIS = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getAPI() {
    return this.http.get(`${this.backendAPIS}api/`);
  }
  registerUser(userData: {
    name: string;
    last_name: string;
    code: string;
    mail: string;
    phone_number: string;
    password: string;
  }) {
    return this.http.post(`${this.backendAPIS}api/register`, userData);
  }

  loginUser(userData: userData) {
    return this.http.post(`${this.backendAPIS}api/login`, userData);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getInfo() {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.backendAPIS}api/readInfo`, { headers });
  }

  getPackages(){
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.backendAPIS}api/readPackages`, { headers });
  }
  editInfo(updatedData: {
    name: string;
    last_name: string;
    mail: string;
    phone_number: string;
  }) {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.put(
      `${this.backendAPIS}api/updateInfo`,
      updatedData,
      { headers }
    );
  }

  deleteAcount() {
    const token = this.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete(`${this.backendAPIS}api/deleteAcount`, { headers });
  }

  logout() {
    localStorage.removeItem('token');
  }
  
  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }
}