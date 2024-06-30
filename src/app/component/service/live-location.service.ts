import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from './model/geoposition.model';
import { LoadingService } from './loading.service';
import { Platform } from '@ionic/angular';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AlertService } from './alert-service';
import {
  AndroidSettings,
  IOSSettings,
  NativeSettings,
} from 'capacitor-native-settings';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  private kordinat: any;
  private getPosition$ = new BehaviorSubject<any>(null);
  public isMobile: boolean;

  constructor(
    private geolocation: Geolocation,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private platform: Platform,
    private androidPermissions: AndroidPermissions,
    private locationAccuracy: LocationAccuracy
  ) {}

  async getLocation(): Promise<void> {
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

              this.geolocation.watchPosition().subscribe((res: any) => {
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
          const lokasi = await this.geolocation.getCurrentPosition();
          this.kordinat = lokasi.coords;
          this.getPosition$.next(lokasi);
        } catch (err) {
          console.log('Error getting position with CapGeolocation: ', err);
        }
      }

      if (this.kordinat) {
        await this.loadingService.dismiss();
        await this.alertService.alert('Lokasi Berhasil Di Dapat', 'Berhasil');
      } else {
        await this.loadingService.dismiss();
        await this.alertService.alert(
          'Tidak dapat menemukan lokasi, silakan aktifkan lokai pada perangkat',
          'Gagal'
        );
      }
    } catch (err) {
      console.log('Error in getLocation method: ', err);
    }
  }

  async getCurrentPosition(): Promise<{ lat: number; lng: number }> {
    const position =
      (await this.geolocation.getCurrentPosition()) as Geoposition;
    return {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
  }

  watchPosition(
    callback: (position: { lat: number; lng: number }) => void
  ): Subscription {
    const watch = this.geolocation.watchPosition();
    return watch.subscribe((position) => {
      if ((position as Geoposition).coords) {
        const geoposition = position as Geoposition;
        callback({
          lat: geoposition.coords.latitude,
          lng: geoposition.coords.longitude,
        });
      } else {
        console.error('Error getting position: ', position);
      }
    });
  }
}
