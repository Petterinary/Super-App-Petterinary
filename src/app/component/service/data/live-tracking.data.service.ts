import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LiveTrackingApiService } from '../api/live-tracking.api.service';

@Injectable({
  providedIn: 'root',
})
export class LiveTrackingDataService {
  constructor(private liveTrackingApiService: LiveTrackingApiService) {}

  getLiveTrackDoctor(id: number): Observable<any> {
    return this.liveTrackingApiService.getLiveTrackDoctor(id);
  }

  getLiveTrackUser(id: number): Observable<any> {
    return this.liveTrackingApiService.getLiveTrackUser(id);
  }

  updateLiveTrack(id: number, data: any): Observable<any> {
    return this.liveTrackingApiService.updateLiveTrack(id, data);
  }

  deleteLiveTrack(id: number): Observable<any> {
    return this.liveTrackingApiService.deleteLiveTrack(id);
  }
}
