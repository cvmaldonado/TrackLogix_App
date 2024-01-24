import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(){
    return this.http.post("http://localhost:3000/tracklogix/register", {},{},);
  }
}