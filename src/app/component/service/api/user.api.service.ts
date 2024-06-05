import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getUserById(userID: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userID}`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/create`, user);
  }

  updateUser(userID: string, user: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/users/update/${userID}`, user);
  }

  deleteUser(userID: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/delete/${userID}`);
  }
}