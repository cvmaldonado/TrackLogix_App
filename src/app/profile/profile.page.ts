import { Component, OnInit } from '@angular/core';
import {authService } from '../auth.service';

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

        },
      },
      {
        text: 'Edit Account',
        handler: () => {
          this.editInfo();
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
}
