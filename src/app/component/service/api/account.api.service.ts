import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/accounts`);
  }

  getAccountById(accountID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/accounts/${accountID}`);
  }

  createAccount(account: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/accounts/create`, account);
  }

  updateAccount(accountID: string, account: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/accounts/update/${accountID}`, account);
  }

  deleteAccount(accountID: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/accounts/delete/${accountID}`);
  }
}