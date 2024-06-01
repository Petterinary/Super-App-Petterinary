import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isLogin = false;
  public isDokter = false;
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
        this.isLogin = true;
        this.router.navigate(['profile/confirmation-register'], {
          queryParams: { status: 'Login Berhasil' },
        });
      } catch (error) {
        this.router.navigate(['profile/confirmation-register'], {
          queryParams: { status: 'Login Gagal' },
        });
      }
    } else {
      console.log('Formulir tidak valid');
    }
  }

  public async submitLogout() {
    try {
      await this.authService.logout().toPromise();
      this.isLogin = false;
      this.userData = null;
      this.router.navigate(['profile/confirmation-register'], {
        queryParams: { status: 'Logout Berhasil' },
      });
    } catch (error) {
      this.router.navigate(['profile/confirmation-register'], {
        queryParams: { status: 'Logout Gagal' },
      });
    }
  }

  public goRegister() {
    this.router.navigate(['profile/service-selection-register']);
  }

  public goRincianProfile() {
    if (!this.isDokter) {
      this.router.navigate(['profile/register'], {
        queryParams: { type: 'lihat' },
      });
    } else {
      this.router.navigate(['profile/register-vet'], {
        queryParams: { type: 'lihat' },
      });
    }
  }

  private async checkLoginStatus() {
    try {
      this.userData = await this.authService.getUserData();
      if (this.userData) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    } catch (error) {
      console.error('Error checking login status', error);
      this.isLogin = false;
    }
  }

  public getUser() {
    this.userData = this.authService.getUserData();
  }

  ngOnInit() {
    this.form();
    this.checkLoginStatus();
    this.getUser();
  }
}
