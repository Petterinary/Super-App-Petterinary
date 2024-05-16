import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormUserVisitPageRoutingModule } from './form-user-visit-routing.module';

import { FormUserVisitPage } from './form-user-visit.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    FormUserVisitPageRoutingModule,
  ],
  declarations: [FormUserVisitPage],
})
export class FormUserVisitPageModule {}
