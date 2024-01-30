// updates.page.ts

import { Component } from '@angular/core';
import { authService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.page.html',
  styleUrls: ['./updates.page.scss'],
})
export class UpdatesPage {
  userData: any = {};

  constructor(private authService: authService, private router: Router) {}

  updateInfo() {
    this.authService.editInfo(this.userData).subscribe(
      (data: any) => {
        console.log('Información actualizada:', data);
      },
      (error) => {
        console.error('Error al actualizar la información:', error);
      }
    );
    this.router.navigate(['/profile']);
  }
}
