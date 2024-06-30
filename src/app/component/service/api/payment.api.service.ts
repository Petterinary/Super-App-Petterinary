import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllPayments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/payments`);
  }

  getPaymentById(paymentID: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/payments/${paymentID}`);
  }

  createPayment(payment: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/payments/create`, payment);
  }

  updatePayment(paymentID: number, payment: any): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/payments/update/${paymentID}`,
      payment
    );
  }

  deletePayment(paymentID: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/payments/delete/${paymentID}`);
  }
}
