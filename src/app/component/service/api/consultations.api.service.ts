import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultationApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getConsultation(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations`);
  }

  getConsultationStage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultationStages`);
  }

  getConsultationById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations/detail/${id}`);
  }

  getConsultationByUserId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations/${id}`);
  }

  getConsultationByDoctorId(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultations/${id}`);
  }

  createConsultation(data: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/serviceRegistrationForms/create`,
      data
    );
  }
}
