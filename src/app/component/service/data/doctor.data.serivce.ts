import { Injectable } from '@angular/core';
import { DoctorService } from '../api/doctor.api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DoctorDataService {
  constructor(private doctorApiSerive: DoctorService) {}

  getAllDoctors(lat: number, lng: number): Observable<any> {
    return this.doctorApiSerive.getAllDoctors(lat, lng);
  }

  getDoctorById(id: number): Observable<any> {
    return this.doctorApiSerive.getDoctorById(id);
  }
}
