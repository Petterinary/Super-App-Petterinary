import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ServiceRegistrationFormDataService } from '../service/data/serviceRegistrationForm.data.service';

@Component({
  selector: 'app-rincian-consul-vv',
  templateUrl: './rincian-consul-vv.component.html',
  styleUrls: ['./rincian-consul-vv.component.scss'],
})
export class RincianConsulVvComponent implements OnInit {
  private idRegisForm: number;
  public formData: any;

  constructor(
    private modalControler: ModalController,
    private regisFormConsul: ServiceRegistrationFormDataService
  ) {}

  private getData() {
    this.regisFormConsul
      .getServiceRegistrationFormById(this.idRegisForm)
      .subscribe((res) => {
        this.formData = res;
      });
  }

  public async close() {
    this.modalControler.dismiss();
  }

  ngOnInit() {
    this.getData();
  }
}
