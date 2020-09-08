import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  instructions = instructions.login;
  signupForm: FormGroup;

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
   this.signupForm = new FormGroup({                 
    'email': new FormControl(null),
    'password' : new FormControl(null)
   });
  }

  onLogin() { 
    this.router.navigate(['/list']);
    console.log(this.signupForm);
  }
  

}
