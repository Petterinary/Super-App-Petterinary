// geolocation.service.ts
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Geoposition } from './model/geoposition.model';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  constructor(private geolocation: Geolocation) {}

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
