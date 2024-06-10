import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultationStageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllConsultationStages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultationStages`);
  }

  getConsultationStageById(consultationStageID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/consultationStages/${consultationStageID}`);
  }

  createConsultationStage(consultationStage: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/consultationStages/create`, consultationStage);
  }

  updateConsultationStage(consultationStageID: number, consultationStage: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/consultationStages/update/${consultationStageID}`, consultationStage);
  }

  deleteConsultationStage(consultationStageID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/consultationStages/delete/${consultationStageID}`);
  }
}