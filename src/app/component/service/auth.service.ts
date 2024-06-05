import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, from, switchMap } from 'rxjs';
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
          return this.fireStore
            .collection('Accounts')
            .doc(userCredential.user.uid)
            .get()
            .pipe(
              switchMap((doc) => {
                const userData = doc.data();
                return this.storageService
                  .set('user', userData)
                  .then(() => userData);
              })
            );
        } else {
          throw new Error('User not found');
        }
      })
    );
  }

  register(
    email: string,
    password: string,
    username: string,
    alamat: string,
    nomorTelepon: string,
    userType: number
  ): Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential.user) {
          const userData = {
            email: userCredential.user.email,
            username: username,
            address: alamat,
            phoneNumber: nomorTelepon,
            userType: 1,
            uid: userCredential.user.uid,
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
    userType: number
  ): Observable<any> {
    return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap((userCredential) => {
        if (userCredential.user) {
          const userData = {
            email: userCredential.user.email,
            username: username,
            tempatPraktik: tempatPraktik,
            jadwalPraktik: jadwalPraktik,
            lamaPengalaman: lamaPengalaman,
            specialisasiHewan: specialisasiHewan,
            nomorTelepon: nomorTelepon,
            userType: userType,
            createdAt: new Date(),
          };
          return this.fireStore
            .collection('Users')
            .doc(userCredential.user.uid)
            .set(userData)
            .then(() => userCredential);
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
