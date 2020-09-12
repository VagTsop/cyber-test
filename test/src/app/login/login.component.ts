import { Component, OnInit } from '@angular/core';
import instructions from '../../assets/config/instructions.js';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoEmptyInputValidator } from '../custom-validators/no-empty-input-validator.js';

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
    'email': new FormControl(null,
                       [Validators.required,
                        Validators.email,
                        Validators.maxLength(49),
                        NoEmptyInputValidator.notOnlyWhitespace]),
    'password' : new FormControl(null,
                       [Validators.required,
                        Validators.maxLength(49),
                        NoEmptyInputValidator.notOnlyWhitespace])
   });
  }

  onLogin() { 
    this.router.navigate(['/list']);
    console.log(this.signupForm);
  }
  

}
