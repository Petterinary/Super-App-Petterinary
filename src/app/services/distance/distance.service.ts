import { Injectable } from '@angular/core';
import { GmapService } from '../gmap/gmap.service';

@Injectable({
  providedIn: 'root',
})
export class DistanceService {
  private directionsService: any;

  constructor(private gmapService: GmapService) {}

  async calculateDistance(
    source: { lat: number; lng: number },
    dest: { lat: number; lng: number }
  ): Promise<{ distance: string; duration: string }> {
    const googleMaps = await this.gmapService.loadGoogleMaps();
    this.directionsService = new googleMaps.DirectionsService();

    return new Promise((resolve, reject) => {
      this.directionsService.route(
        {
          origin: source,
          destination: dest,
          travelMode: 'DRIVING',
          provideRouteAlternatives: true,
        },
        (response, status) => {
          if (status === 'OK') {
            const directionsData = response.routes[0].legs[0];
            const distance = directionsData.distance.text;
            const duration = directionsData.duration.text;
            resolve({ distance, duration });
          } else {
            reject(`Error fetching directions: ${status}`);
            console.log(status);
          }
        }
      );
    });
  }
}
