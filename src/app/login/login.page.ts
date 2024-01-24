import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('login page');
  }
}
