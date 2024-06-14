// tracker.service.ts
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  private docRef: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) {
    this.docRef = this.afs.doc('liveTracking/7bZdz2lWAIRKOG1Q9eAb');
  }

  getLocation(): Observable<any> {
    return this.docRef.valueChanges();
  }

  async updateSourceLocation(source: any) {
    try {
      const userData = {
        sourceLat: source.lat,
        sourceLng: source.lng,
      };
      await this.docRef.update(userData);
      return true;
    } catch (e) {
      throw e;
    }
  }
}
