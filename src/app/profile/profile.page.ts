import { Component, OnInit } from '@angular/core';
import {authService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  userData: any;
  constructor(private authService: authService) { 
    this.getInfo();
  }
  getInfo(){
    this.authService.getInfo().subscribe(
      (data) => {
        this.userData = data;
        console.log('Datos de usuario:', data);
      },
      (error)=> {
        console.log('ERRRORR', error)
      }
    )
  }
}
