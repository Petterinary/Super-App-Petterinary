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

  public async submitLogout() {
    try {
      await this.authService.logout().toPromise();
      this.isLogin = false;
      this.userData = null;
      this.router.navigate(['confirmation'], {
        queryParams: {
          status: 'Logout Berhasil',
          url: 'login',
          text: 'Login',
          type: 'Check',
        },
      });
    } catch (error) {
      this.router.navigate(['confirmation'], {
        queryParams: {
          status: 'Logout Gagal',
          url: 'profile',
          text: 'Profile',
          type: 'Fail',
        },
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
    this.checkLoginStatus();
    this.getUser();
  }
}
