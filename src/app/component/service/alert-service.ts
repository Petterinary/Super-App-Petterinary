import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private loading: any;

  constructor(private alertController: AlertController) {}

  async confirmAlert(
    message: string,
    header: string,
    text: 'Oke',
    cancel: 'Batal',
    handler: any = () => {}
  ): Promise<void> {
    const alert = await this.alertController.create({
      message,
      header,
      buttons: [
        {
          text: text,
          handler: handler,
        },
        {
          text: cancel,
          role: 'cancel',
        },
      ],
    });

    return await alert.present();
  }

  async alert(
    message: string,
    header: string,
    handler: any = () => {}
  ): Promise<void> {
    const alert = await this.alertController.create({
      message,
      header,
      buttons: [
        {
          text: 'Oke',
          handler: handler,
        },
      ],
    });

    return await alert.present();
  }

  async alertSetting(
    message: string,
    header: string,
    handler: any = () => {}
  ): Promise<void> {
    let pressed = false;
    const alert = await this.alertController.create({
      message,
      header,
      buttons: [
        {
          text: 'Pengaturan',
          handler: () => {
            pressed = true;
            handler();
          },
        },
        {
          text: 'Oke',
          handler: () => {},
        },
      ],
    });

    return await alert.present();
  }

  async alertAndDismiss(
    message: string,
    header: string,
    handler: any = () => {}
  ) {
    let pressed = false;
    const alert = await this.alertController.create({
      message,
      header,
      buttons: [
        {
          text: 'Oke',
          handler: () => {
            (pressed = true), handler();
          },
        },
      ],
    });

    alert.onDidDismiss().then(() => {
      if (!pressed) {
        handler();
      }
    });

    return await alert.present();
  }
}
