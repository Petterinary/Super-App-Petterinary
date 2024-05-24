import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from './back-button/back-button.component';
import { SuccessFailedComponentComponent } from './success-failed-component/success-failed-component.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    HeaderBarComponent,
    BottomBarComponent,
    BackButtonComponent,
    SuccessFailedComponentComponent,
    PaymentComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    HeaderBarComponent,
    BottomBarComponent,
    BackButtonComponent,
    SuccessFailedComponentComponent,
    PaymentComponent,
  ],
})
export class GlobalModule {}
