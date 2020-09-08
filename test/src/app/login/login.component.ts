import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  instructions = instructions.login;
  constructor(
    private router: Router
    ) { }

  ngOnInit() {
  }

  onLogin() {
    this.router.navigate(['/list']);
  }

}
