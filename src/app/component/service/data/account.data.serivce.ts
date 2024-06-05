import { Injectable } from '@angular/core';
import { AccountService } from '../api/account.api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountDataService {
  constructor(private accountApiService: AccountService) {}

  getAllAccounts(): Observable<any> {
    return this.accountApiService.getAllAccounts();
  }

  getAccountById(accountID: number): Observable<any> {
    return this.accountApiService.getAccountById(accountID);
  }

  getAccountByUid(uid: string): Observable<any> {
    return this.accountApiService.getAccountByUid(uid);
  }

  createAccount(account: any): Observable<any> {
    return this.accountApiService.createAccount(account);
  }

  updateAccount(accountID: number, account: any): Observable<any> {
    return this.accountApiService.updateAccount(accountID, account);
  }

  deleteAccount(accountID: number): Observable<any> {
    return this.accountApiService.deleteAccount(accountID);
  }
}