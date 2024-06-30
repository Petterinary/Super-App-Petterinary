import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceRegistrationFormApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllServiceRegistrationForms(): Observable<any> {
    return this.http.get(`${this.apiUrl}/serviceRegistrationForms`);
  }

  getServiceRegistrationFormById(
    serviceRegistrationFormID: number
  ): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/serviceRegistrationForms/${serviceRegistrationFormID}`
    );
  }

  createServiceRegistrationForm(serviceRegistrationForm: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/serviceRegistrationForms/create`,
      serviceRegistrationForm
    );
  }

  updateServiceRegistrationForm(
    serviceRegistrationFormID: number,
    serviceRegistrationForm: any
  ): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/serviceRegistrationForms/update/${serviceRegistrationFormID}`,
      serviceRegistrationForm
    );
  }

  deleteServiceRegistrationForm(
    serviceRegistrationFormID: number
  ): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/serviceRegistrationForms/delete/${serviceRegistrationFormID}`
    );
  }
}
