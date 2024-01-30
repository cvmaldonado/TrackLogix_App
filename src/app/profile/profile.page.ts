import { Component, OnInit } from '@angular/core';
import {authService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
    isActionSheetOpen = false;
    public actionSheetButtons = [
      {
        text: ' Delete Account',
        role: 'destructive',
        handler: () => {
          this.deleteAcount();
          this.router.navigate(['/register']);
        },
      },
      {
        text: 'Edit Account',
        handler: () => {
          this.router.navigate(['/updates']);
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ];
  
    setOpen(isOpen: boolean) {
      this.isActionSheetOpen = isOpen;
    }
  
  //
  userData: any;
  constructor(private authService: authService, private router: Router) {
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

  editInfo(){
    this.authService.editInfo(this.userData).subscribe(
      (data) => {
        console.log('Datos de usuario:', data);
      },
      (error)=> {
        this.isActionSheetOpen = true;
        console.log('ERRRORR', error)
      }
    )
  }

  deleteAcount(){
    this.authService.deleteAcount().subscribe(
      (data) => {
        console.log('Datos de usuario:', data);
      },
      (error)=> {
        console.log('ERRRORR', error)
      }
    )
  }
}
