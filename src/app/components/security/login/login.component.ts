import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string;
  token: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    }

  onLogout() {
    this.authService.logout()
      .then(_ => {
        this.email = null;
        this.token = null;
      }).catch(error => {
        console.log(error);
        this.errorMessage = error;
      });
  }

  onLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email, password).then(data => {
      form.reset();
      this.email = email;
      this.token = data;
    }).catch((error) => {
      console.log(error);
      this.errorMessage = error;
    });
  }

  goRegister() {
    this.router.navigate(['/register']);
  }

  onclick() {
    this.router.navigate(['/profile/edit']);
  }
}


