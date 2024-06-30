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

  private async ensureStorageInitialized(): Promise<Storage> {
    if (this._storage) {
      return this._storage;
    }
    await this.init();
    if (this._storage) {
      return this._storage;
    }
    throw new Error('Storage is not initialized');
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
