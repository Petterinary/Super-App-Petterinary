import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading: any;

  constructor(private loadingController: LoadingController) {}

  async present(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Mohon Tunggu',
    });

    await this.loading.present();
  }

  async dismiss(): Promise<void> {
    await this.loading.dismiss();
  }
}
