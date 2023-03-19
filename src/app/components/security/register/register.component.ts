import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;
  errorMessage: string;
  registerSuccess: string;
  roleList = ['administrator', 'explorer', 'manager', 'sponsor'];

  constructor(private authService: AuthService,
      private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      name: [''],
      surname: [''],
      email: [''],
      password: [''],
      phone: [''],
      address: [''],
      role: ['']
    });
  }

  onRegister() {
    this.authService.registerUser(this.registrationForm.value)
      .then(res => {
        console.log(res);
        this.registerSuccess = 'Actor successfully registered, navigate to login page';
      }, error => {
        console.log(error);
        this.errorMessage = error;
      });
  }
}


