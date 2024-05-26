import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { GlobalModule } from 'src/app/component/global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlobalModule,
    RegisterPageRoutingModule,
  ],
  declarations: [RegisterPage],
})
export class RegisterPageModule {}
