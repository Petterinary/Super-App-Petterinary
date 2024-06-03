import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public loginForm!: FormGroup;
  public userData: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  public form() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public async submitLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      try {
        await this.authService.login(email, password).toPromise();
        this.userData = await this.authService.getUserData();
        if (this.userData.userType === 0) {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['home-vet']);
        }
      } catch (error) {
        this.router.navigate(['confirmation'], {
          queryParams: {
            status: 'Login Gagal',
            url: 'login',
            text: 'Login',
            type: 'Fail',
          },
        });
      }
    } else {
      console.log('Formulir tidak valid');
    }
  }

  public goRegister() {
    this.router.navigate(['profile/service-selection-register']);
  }

  ngOnInit() {
    this.form();
  }
}
