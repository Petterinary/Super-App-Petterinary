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
  ) {
    this.failSave = this.failSave.bind(this);
  }

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
        jadwalPraktik: ['', [Validators.required, this.formatJadwal]],
        lamaPengalaman: ['', [Validators.required]],
        specialisasiHewan: ['', Validators.required],
        password: ['', [Validators.required]],
        confirmPassword: ['', Validators.required],
        latitude: ['', Validators.required],
        longitude: ['', Validators.required],
      },
      {
        validator: this.mustMatch('password', 'confirmPassword'),
      }
    );
  }

  formatJadwal(control: any): { [key: string]: boolean } | null {
    const formatJadwal =
      /^((Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu)( - (Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu))?): (\d{2}:\d{2}) - (\d{2}:\d{2})(, (Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu): (\d{2}:\d{2}) - (\d{2}:\d{2}))?(, (Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu): (\d{2}:\d{2}) - (\d{2}:\d{2}))?$/;
    if (!control.value.match(formatJadwal)) {
      return { invalidJadwal: true };
    }
    return null;
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
    const formData = this.registerForm.value;
    const dataAccount = {
      email: formData.email,
      password: formData.password,
    };

    const data = {
      username: formData.username,
      address: formData.tempatPraktik,
      doctorSchedule: formData.jadwalPraktik,
      experience: formData.lamaPengalaman,
      gender: formData.jenisKelamin,
      specialization: formData.specialisasiHewan,
      phoneNumber: formData.nomorTelepon,
      lat: formData.latitude,
      lng: formData.longitude,
    };

    try {
      await this.authService
        .registerDoctors(dataAccount.email, dataAccount.password, data)
        .toPromise();
      this.loadingService.dismiss();
      this.alertService.alert('Register berhasil', 'Berhasil', this.goLogin());
    } catch (error) {
      this.loadingService.dismiss();
      this.alertService.alert('Register Gagal', 'Gagal', this.failSave);
    }
  }

  public async getLocation() {
    await this.loadingService.present();

    try {
      if (this.isMobile && this.platform.is('android')) {
        const permiss = await this.androidPermissions.requestPermissions([
          this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION,
          this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION,
        ]);

        if (!permiss.hasPermission) {
          await this.alertService.alertSetting(
            'Tidak dapat menerima lokasi',
            'Gagal',
            () =>
              NativeSettings.open({
                optionAndroid: AndroidSettings.ApplicationDetails,
                optionIOS: IOSSettings.App,
              })
          );
          this.location.back();
          return;
        }

        try {
          const lokasi = await this.geolocation.getCurrentPosition({
            timeout: 6000,
          });
          this.kordinat = lokasi.coords;
          this.getPosition$.next(lokasi);
        } catch (err) {
          console.log('Error getting current position: ', err);
        }

        if (!this.kordinat) {
          try {
            const canRequest = await this.locationAccuracy.canRequest();

            if (canRequest) {
              await this.locationAccuracy.request(
                this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY
              );

              this.geolocation
                .watchPosition()
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe((res: any) => {
                  if (res) {
                    this.kordinat = res.coords;
                    this.getPosition$.next(res);
                  }
                });
            } else {
              throw new Error('cannot-request');
            }
          } catch (err) {
            console.log('Error during location accuracy request: ', err);
          }
        }
      } else {
        try {
          const lokasi = await CapGeolocation.Geolocation.getCurrentPosition();
          this.kordinat = lokasi.coords;
          this.getPosition$.next(lokasi);
        } catch (err) {
          console.log('Error getting position with CapGeolocation: ', err);
        }
      }

      if (this.kordinat) {
        await this.loadingService.dismiss();
        await this.alertService.alert('Lokasi Berhasil Di Dapat', 'Berhasil');
        this.registerForm.patchValue({
          latitude: this.kordinat.latitude,
          longitude: this.kordinat.longitude,
        });
      } else {
        await this.loadingService.dismiss();
        await this.alertService.alertSetting(
          'Tidak dapat menemukan lokasi, silakan aktifkan lokai pada perangkat',
          'Gagal',
          () =>
            NativeSettings.open({
              optionAndroid: AndroidSettings.ApplicationDetails,
              optionIOS: IOSSettings.App,
            })
        );
      }
    } catch (err) {
      console.log('Error in getLocation method: ', err);
    }
  }

  goLogin() {
    this.router.navigateByUrl('/login');
  }

  failSave() {
    this.form();
    this.registerForm.reset();
  }

  ngOnInit() {
    this.unsubscribe$ = new Subject<void>();
    this.form();
    this.isMobile = !this.platform.is('capacitor') ? false : true;
  }
}
