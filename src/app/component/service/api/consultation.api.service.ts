import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllConsultations(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations`);
  }

  getConsultationByUserId(userID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations/user/${userID}`);
  }

  getConsultationByDoctorId(doctorID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations/doctor/${doctorID}`);
  }

  getConsultationByDetailedId(consultationID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations/doctor/${consultationID}`);
  }

  createConsultation(consultation: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/consultations/create`, consultation);
  }

  updateConsultation(consultationID: number, consultation: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/consultations/update/${consultationID}`, consultation);
  }

  deleteConsultation(consultationID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/consultations/delete/${consultationID}`);
  }
}