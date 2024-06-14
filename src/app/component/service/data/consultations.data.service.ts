import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationApiService } from '../api/consultations.api.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultationDataService {
  constructor(private consultationApiService: ConsultationApiService) {}

  getConsultation(): Observable<any> {
    return this.consultationApiService.getConsultation();
  }

  getConsultationStage(): Observable<any> {
    return this.consultationApiService.getConsultationStage();
  }

  getConsultationById(id: number): Observable<any> {
    return this.consultationApiService.getConsultationById(id);
  }

  getConsultationByUserId(id: number): Observable<any> {
    return this.consultationApiService.getConsultationByUserId(id);
  }

  getConsultationByDoctorId(id: number): Observable<any> {
    return this.consultationApiService.getConsultationByDoctorId(id);
  }

  createConsultation(data: any): Observable<any> {
    return this.consultationApiService.createConsultation(data);
  }
}
