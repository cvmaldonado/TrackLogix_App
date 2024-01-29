import { Component, OnInit } from '@angular/core';
import {authService } from '../auth.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.page.html',
  styleUrls: ['./packages.page.scss'],
})
export class PackagesPage {

  packegesData: any;
  constructor(private authService: authService) { 
    this.getPackages();
  }
  getPackages(){
    this.authService.getPackages().subscribe(
      (data) => {
        this.packegesData = data;
        console.log('Datos de usuario:', data);
      },
      (error)=> {
        console.log('ERRRORR', error)
      }
    )
  }
}