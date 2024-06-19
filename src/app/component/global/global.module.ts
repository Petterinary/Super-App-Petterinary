import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from './back-button/back-button.component';
import { SuccessFailedComponentComponent } from './success-failed-component/success-failed-component.component';
import { PaymentComponent } from './payment/payment.component';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RincianConsulUvComponent } from '../rincian-consul-uv/rincian-consul-uv.component';
import { RincianConsulVvComponent } from '../rincian-consul-vv/rincian-consul-vv.component';

@NgModule({
  declarations: [
    HeaderBarComponent,
    BottomBarComponent,
    BackButtonComponent,
    SuccessFailedComponentComponent,
    PaymentComponent,
    MapComponent,
    RincianConsulUvComponent,
    RincianConsulVvComponent,
  ],
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule],
  exports: [
    HeaderBarComponent,
    BottomBarComponent,
    BackButtonComponent,
    SuccessFailedComponentComponent,
    PaymentComponent,
    MapComponent,
    RincianConsulUvComponent,
    RincianConsulVvComponent,
  ],
})
export class GlobalModule {}
