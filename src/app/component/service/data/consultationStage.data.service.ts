import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationApiService } from '../api/consultation.api.service';
import { ConsultationStageApiService } from '../api/consultationStage.api.service';

@Injectable({
  providedIn: 'root',
})
export class ConsultationStageDataService {
  constructor(
    private consultationStageApiService: ConsultationStageApiService
  ) {}

  getAllConsultationStages(): Observable<any> {
    return this.consultationStageApiService.getAllConsultationStages();
  }

  getConsultationStageById(id: number): Observable<any> {
    return this.consultationStageApiService.getConsultationStageById(id);
  }

  createConsultationStage(data: any): Observable<any> {
    return this.consultationStageApiService.createConsultationStage(data);
  }

  updateConsultationStage(id: number, data: any): Observable<any> {
    return this.consultationStageApiService.updateConsultationStage(id, data);
  }

  deleteConsultationStage(id: number): Observable<any> {
    return this.consultationStageApiService.deleteConsultationStage(id);
  }
}
