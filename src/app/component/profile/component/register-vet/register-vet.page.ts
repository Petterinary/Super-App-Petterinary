import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/component/service/auth.service';
import { LoadingService } from 'src/app/component/service/loading.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { AlertService } from 'src/app/component/service/alert-service';
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings,
} from 'capacitor-native-settings';
import { Location } from '@angular/common';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import * as CapGeolocation from '@capacitor/geolocation';

@Component({
  selector: 'app-register-vet',
  templateUrl: './register-vet.page.html',
  styleUrls: ['./register-vet.page.scss'],
})
export class RegisterVetPage implements OnInit {
  private unsubscribe$: Subject<void>;
  public type: string = '';
  public title = 'Form Pendaftaran';
  public isRincian: boolean = false;
  public registerForm!: FormGroup;
  private getPosition$ = new BehaviorSubject<any>(null);
  private kordinat: any;
  public isMobile: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loadingService: LoadingService,
    private geolocation: Geolocation,
    private androidPermissions: AndroidPermissions,
    private alertService: AlertService,
    private location: Location,
    private locationAccuracy: LocationAccuracy,
    private platform: Platform
  ) {}

  public form() {
    this.registerForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        username: ['', Validators.required],
        nomorTelepon: [
          '',
          [Validators.required, Validators.pattern('^[0-9]+$')],
        ],
        jenisKelamin: ['', Validators.required],
        tempatPraktik: ['', Validators.required],
        jadwalPraktik: ['', Validators.required],
        lamaPengalaman: ['', [Validators.required]],
        specialisasiHewan: ['', Validators.required],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
        latitude: [{ value: '', disabled: true }, Validators.required],
        longitude: [{ value: '', disabled: true }, Validators.required],
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

  public async submitRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loadingService.present();
    const {
      email,
      password,
      username,
      tempatPraktik,
      jadwalPraktik,
      lamaPengalaman,
      specialisasiHewan,
      nomorTelepon,
      jenisKelamin,
      latitude,
      longitude,
    } = this.registerForm.getRawValue();

    try {
      await this.authService
        .registerDoctors(
          email,
          password,
          username,
          tempatPraktik,
          jadwalPraktik,
          lamaPengalaman,
          specialisasiHewan,
          nomorTelepon,
          jenisKelamin,
          latitude,
          longitude
        )
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
          text: 'Coba Lagi',
          type: 'Fail',
        },
      });
    }
  }

  public async getLocation() {
    console.log('Is Mobile: ', this.isMobile);
    console.log('Platform: ', this.platform.is('android'));

    if (this.isMobile && this.platform.is('android')) {
      console.log('Requesting permissions...');

      // const permiss = await this.androidPermissions.requestPermissions([
      //   this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
      //   this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
      // ]);

      // if (!permiss.hasPermission) {
      //   console.log('Permissions not granted');
      //   await this.alertService.alertSetting(
      //     'Tidak dapat menerima lokasi',
      //     'Gagal',
      //     () =>
      //       NativeSettings.open({
      //         optionAndroid: AndroidSettings.ApplicationDetails,
      //         optionIOS: IOSSettings.App,
      //       })
      //   );
      //   this.location.back();
      //   return;
      // }

      try {
        const lokasi = await this.geolocation.getCurrentPosition({
          timeout: 6000,
        });
        console.log('Lokasi obtained: ', lokasi);
        this.kordinat = lokasi.coords;
        this.getPosition$.next(lokasi);
      } catch (err) {
        console.log('Error getting current position: ', err);
      }

      if (!this.kordinat) {
        try {
          this.geolocation
            .watchPosition()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((res: any) => {
              if (res) {
                console.log('Watching position: ', res);
                this.kordinat = res.coords;
                this.getPosition$.next(res);
              }
            });
          // const canRequest = await this.locationAccuracy.canRequest();
          // console.log('Can request high accuracy: ', canRequest);

          // if (canRequest) {
          //   await this.locationAccuracy.request(
          //     this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
          //   );

          //   this.geolocation
          //     .watchPosition()
          //     .pipe(takeUntil(this.unsubscribe$))
          //     .subscribe((res: any) => {
          //       if (res) {
          //         console.log('Watching position: ', res);
          //         this.kordinat = res.coords;
          //         this.getPosition$.next(res);
          //       }
          //     });
          // } else {
          //   throw new Error('cannot-request');
          // }
        } catch (err) {
          console.log('Error during location accuracy request: ', err);
        }
      }
    } else {
      try {
        const lokasi = await CapGeolocation.Geolocation.getCurrentPosition();
        console.log('CapGeolocation obtained: ', lokasi);
        this.kordinat = lokasi.coords;
        this.getPosition$.next(lokasi);
      } catch (err) {
        console.log('Error getting position with CapGeolocation: ', err);
      }
    }

    if (this.kordinat) {
      console.log('Setting coordinates in form: ', this.kordinat);
      this.registerForm.patchValue({
        latitude: this.kordinat.latitude,
        longitude: this.kordinat.longitude,
      });
    } else {
      console.log('Coordinates not set because they are null');
    }
  }

  ngOnInit() {
    this.unsubscribe$ = new Subject<void>();
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
    this.isMobile = !this.platform.is('capacitor') ? false : true;
  }
}
