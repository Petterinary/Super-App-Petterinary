import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsultationApiService } from '../api/consultation.api.service';
import { ServiceRegistrationFormApiService } from '../api/serviceRegistrationForm.api.service';

@Injectable({
  providedIn: 'root',
})
export class ServiceRegistrationFormDataService {
  constructor(
    private serviceRegistrationFormApiService: ServiceRegistrationFormApiService
  ) {}

  getAllServiceRegistrationForms(): Observable<any> {
    return this.serviceRegistrationFormApiService.getAllServiceRegistrationForms();
  }

  getServiceRegistrationFormById(id: number): Observable<any> {
    return this.serviceRegistrationFormApiService.getServiceRegistrationFormById(
      id
    );
  }

  createServiceRegistrationForm(data: any): Observable<any> {
    return this.serviceRegistrationFormApiService.createServiceRegistrationForm(
      data
    );
  }

  updateServiceRegistrationForm(id: number, data: any): Observable<any> {
    return this.serviceRegistrationFormApiService.updateServiceRegistrationForm(
      id,
      data
    );
  }

  deleteServiceRegistrationForm(id: number): Observable<any> {
    return this.serviceRegistrationFormApiService.deleteServiceRegistrationForm(
      id
    );
  }
}
