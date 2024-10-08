import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormVetVisitPageRoutingModule } from './form-vet-visit-routing.module';

import { FormVetVisitPage } from './form-vet-visit.page';
import { GlobalModule } from '../global/global.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GlobalModule,
    IonicModule,
    ReactiveFormsModule,
    FormVetVisitPageRoutingModule,
  ],
  declarations: [FormVetVisitPage],
})
export class FormVetVisitPageModule {}
