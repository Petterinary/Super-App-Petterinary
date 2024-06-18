// tracker.service.ts
import { Injectable } from '@angular/core';
import { LiveTrackingDataService } from 'src/app/component/service/data/live-tracking.data.service';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  constructor(private liveTrackingDataService: LiveTrackingDataService) {}

  async updateSourceLocation(id: number, source: any) {
    try {
      const userData = {
        lat: source.lat,
        lng: source.lng,
      };
      await this.liveTrackingDataService.updateLiveTrack(id, userData);
      return true;
    } catch (e) {
      throw e;
    }
  }
}
