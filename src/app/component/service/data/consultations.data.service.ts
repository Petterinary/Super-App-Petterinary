import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationApiService } from '../api/consultation.api.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultationDataService {
  constructor(private consultationApiService: ConsultationApiService) {}

  getConsultation(): Observable<any> {
    return this.consultationApiService.getAllConsultations();
  }

  getConsultationByUserId(id: number): Observable<any> {
    return this.consultationApiService.getConsultationByUserId(id);
  }

  getConsultationByDoctorId(id: number): Observable<any> {
    return this.consultationApiService.getConsultationByDoctorId(id);
  }

  getConsultationByDetailedId(id: number): Observable<any> {
    return this.consultationApiService.getConsultationByDetailedId(id);
  }

  createConsultation(data: any): Observable<any> {
    return this.consultationApiService.createConsultation(data);
  }

  updateConsultation(id: number, data: any): Observable<any> {
    return this.consultationApiService.updateConsultation(id, data);
  }

  deleteConsultation(id: number): Observable<any> {
    return this.consultationApiService.deleteConsultation(id);
  }
}
