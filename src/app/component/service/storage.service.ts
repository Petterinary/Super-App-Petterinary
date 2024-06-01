import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  private ensureStorageInitialized(): Promise<Storage> {
    if (this._storage) {
      return Promise.resolve(this._storage);
    } else {
      return this.init().then(() => {
        if (this._storage) {
          return this._storage;
        } else {
          return Promise.reject('Storage is not initialized');
        }
      });
    }
  }

  public async set(key: string, value: any): Promise<any> {
    const storage = await this.ensureStorageInitialized();
    return storage.set(key, value);
  }

  public async get(key: string): Promise<any> {
    const storage = await this.ensureStorageInitialized();
    return storage.get(key);
  }

  public async remove(key: string): Promise<any> {
    const storage = await this.ensureStorageInitialized();
    return storage.remove(key);
  }
}
