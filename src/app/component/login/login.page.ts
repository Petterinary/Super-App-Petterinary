import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from '../service/loading.service';
import { AlertService } from '../service/alert-service';

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
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.failSave = this.failSave.bind(this);
  }

  public form() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  public async submitLogin() {
    if (this.loginForm.valid) {
      this.loadingService.present();
      const { email, password } = this.loginForm.value;
      try {
        await this.authService.login(email, password).toPromise();
        this.loadingService.dismiss();
        this.userData = await this.authService.getUserData();
        if (this.userData.userType === '1') {
          this.router.navigate(['home']);
        } else {
          this.router.navigate(['home-vet']);
        }
      } catch (error) {
        this.loadingService.dismiss();
        this.alertService.alert('Login Gagal', 'Gagal', this.failSave);
      }
    } else {
      console.log('Formulir tidak valid');
    }
  }

  public goRegister() {
    this.router.navigate(['profile/service-selection-register']);
  }

  failSave() {
    this.form();
    this.loginForm.reset();
  }

  ngOnInit() {
    this.form();
  }
}
