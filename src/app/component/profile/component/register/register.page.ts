import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { AuthService } from 'src/app/component/service/auth.service';
import { LoadingService } from 'src/app/component/service/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public type: string = '';
  public title = 'Form Pendaftaran';
  public isRincian: boolean = false;
  public registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private authService: AuthService,
    private geolocation: Geolocation,
    private androidPermissions: AndroidPermissions,
    private platform: Platform
  ) {}

  public form() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        alamat: ['', Validators.required],
        nomorTelepon: [
          '',
          [Validators.required, Validators.pattern('^[0-9]+$')],
        ],
        jenisKelamin: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  public getLocation() {
    if (this.platform.is('cordova')) {
      this.androidPermissions
        .checkPermission(
          this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
        )
        .then((result) => {
          if (result.hasPermission) {
            this.getGeolocation();
          } else {
            this.requestLocationPermission();
          }
        })
        .catch((error) => {
          console.error('Error checking location permission:', error);
        });
    } else {
      this.getBrowserGeolocation();
    }
  }

  private getGeolocation() {
    this.geolocation
      .getCurrentPosition()
      .then((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.registerForm.patchValue({
          latitude: latitude,
          longitude: longitude,
        });
      })
      .catch((error) => {
        console.error('Error getting location:', error);
      });
  }

  private requestLocationPermission() {
    this.androidPermissions
      .requestPermission(
        this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION
      )
      .then((result) => {
        if (result.hasPermission) {
          this.getGeolocation();
        } else {
          console.error('Location permission denied.');
        }
      })
      .catch((error) => {
        console.error('Error requesting location permission:', error);
      });
  }

  private getBrowserGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.registerForm.patchValue({
            latitude: latitude,
            longitude: longitude,
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  public async submitRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loadingService.present();
    const formData = this.registerForm.value;
    const dataAccount = {
      email: formData.email,
      password: formData.password,
    };
    const data = {
      username: formData.username,
      address: formData.alamat,
      phoneNumber: formData.nomorTelepon,
      gender: formData.jenisKelamin,
      lat: formData.latitude.toString(),
      lng: formData.longitude.toString(),
    };
    try {
      await this.authService
        .register(dataAccount.email, dataAccount.password, data)
        .toPromise();
      this.loadingService.dismiss();
      this.router.navigate(['confirmation'], {
        queryParams: {
          status: 'Register Berhasil',
          url: 'login',
          text: 'Login',
          type: 'Check',
        },
      });
    } catch (error) {
      this.loadingService.dismiss();
      this.router.navigate(['confirmation'], {
        queryParams: {
          status: 'Register Gagal',
          url: 'login',
          text: 'Login',
          type: 'Fail',
        },
      });
    }
  }

  ngOnInit() {
    this.form();
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      if (this.type === 'lihat') {
        this.isRincian = true;
        this.title = 'Rincian Profile';
      } else {
        this.isRincian = false;
        this.title = 'Form Pendaftaran';
      }
    });
  }
}
