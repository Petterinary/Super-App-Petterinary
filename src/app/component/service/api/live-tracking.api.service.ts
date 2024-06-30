import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root',
})
export class LiveTrackingApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getLiveTrackDoctor(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/liveTrackings/doctor/${id}`);
  }

  getLiveTrackUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/liveTrackings/user/${id}`);
  }

  updateLiveTrack(id: number, data: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/liveTrackings/update/${id}`, data);
  }

  deleteLiveTrack(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/liveTrackings/delete/${id}`);
  }
}
