import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root',
})
export class DoctorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllDoctors(lat: number, lng: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/doctors?lat=${lat}&lng=${lng}`);
  }

  getDoctorById(doctorID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/doctors/${doctorID}`);
  }

  createDoctor(doctor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/doctors/create`, doctor);
  }

  updateDoctor(doctorID: string, doctor: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/doctors/update/${doctorID}`, doctor);
  }

  deleteDoctor(doctorID: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/doctors/delete/${doctorID}`);
  }
}
