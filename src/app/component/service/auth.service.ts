import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, map, switchMap, throwError } from 'rxjs';
import { StorageService } from './storage.service';
import { AccountDataService } from './data/account.data.serivce';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private storageService: StorageService,
    private accountDataService: AccountDataService
  ) {}

  login(email: string, password: string): Observable<any> {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential.user) {
          return this.accountDataService
            .getAccountByUid(userCredential.user.uid)
            .pipe(
              switchMap((userData) => {
                return from(this.storageService.set('user', userData)).pipe(
                  map(() => userData)
                );
              })
            );
        } else {
          return throwError(new Error('User not found'));
        }
      })
    );
  }

  register(email: string, password: string, data: any): Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential.user) {
          const userData = {
            ...data,
            userType: 1,
            uid: userCredential.user.uid,
            email: userCredential.user.email,
          };
          return this.accountDataService.createAccount(userData);
        } else {
          throw new Error('User credential is null');
        }
      })
    );
  }

  registerDoctors(
    email: string,
    password: string,
    username: string,
    tempatPraktik: string,
    jadwalPraktik: string,
    lamaPengalaman: string,
    specialisasiHewan: string,
    nomorTelepon: string,
    jenisKelamin: string,
    lat: string,
    lang: string
  ): Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential.user) {
          const userData = {
            email: userCredential.user.email,
            username: username,
            address: tempatPraktik,
            doctorSchedule: jadwalPraktik,
            experience: lamaPengalaman,
            gender: jenisKelamin,
            specialization: specialisasiHewan,
            phoneNumber: nomorTelepon,
            userType: 2,
            uid: userCredential.user.uid,
            lat: lat,
            lang: lang,
          };
          return this.accountDataService.createDoctorAccount(userData);
        } else {
          throw new Error('User credential is null');
        }
      })
    );
  }

  logout(): Observable<void> {
    return from(this.auth.signOut()).pipe(
      switchMap(() => this.storageService.remove('user'))
    );
  }

  async getUserData(): Promise<any> {
    try {
      const userData = await this.storageService.get('user');
      return userData || null;
    } catch (error) {
      return null;
    }
  }
}
