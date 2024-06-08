// tracker.service.ts
import { Injectable } from '@angular/core';
import { doc, Firestore, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackerService {
  constructor(private firestore: Firestore) {}

  docRef(path) {
    return doc(this.firestore, path);
  }

  getLocation() {
    let dataRef: any = this.docRef('liveTracking/7bZdz2lWAIRKOG1Q9eAb');
    return new Observable<any>((observer) => {
      onSnapshot(dataRef, (doc) => {
        observer.next(doc.data());
      });
    });
  }

  async updateSourceLocation(source) {
    try {
      const dataRef = this.docRef('liveTracking/7bZdz2lWAIRKOG1Q9eAb');
      await updateDoc<any, any>(dataRef, { source });

      return true;
    } catch (e) {
      throw e;
    }
  }
}
