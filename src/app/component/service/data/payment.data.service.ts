import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentApiService } from '../api/payment.api.service';

@Injectable({
  providedIn: 'root',
})
export class PaymentDataService {
  constructor(private paymentApiSerive: PaymentApiService) {}

  getAllPayments(): Observable<any> {
    return this.paymentApiSerive.getAllPayments();
  }

  getPaymentById(id: number): Observable<any> {
    return this.paymentApiSerive.getPaymentById(id);
  }

  createPayment(data: any): Observable<any> {
    return this.paymentApiSerive.createPayment(data);
  }

  updatePayment(id: number, data: any): Observable<any> {
    return this.paymentApiSerive.updatePayment(id, data);
  }

  deletePayment(id: number): Observable<any> {
    return this.paymentApiSerive.deletePayment(id);
  }
}
