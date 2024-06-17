import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoadingService } from '../service/loading.service';
import { AlertService } from '../service/alert-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isDokter = false;
  public loginForm!: FormGroup;
  public userData: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private router: Router
  ) {}

  public async submitLogout() {
    try {
      await this.authService.logout().toPromise();
      this.userData = null;
      this.alertService.alert('Logout berhasil', 'Berhasil', this.goLogin());
    } catch (error) {
      this.alertService.alert('Logout Gagal', 'Gagal');
    }
  }

  goLogin() {
    this.router.navigateByUrl('/login');
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
      if (this.userData.userType === '2') {
        this.isDokter = true;
      } else {
        this.isDokter = false;
      }
    } catch (error) {
      console.error('Error checking login status', error);
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
