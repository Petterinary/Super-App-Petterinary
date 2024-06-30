import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServiceRegistrationFormDataService } from '../service/data/serviceRegistrationForm.data.service';

@Component({
  selector: 'app-rincian-consul-uv',
  templateUrl: './rincian-consul-uv.component.html',
  styleUrls: ['./rincian-consul-uv.component.scss'],
})
export class RincianConsulUvComponent implements OnInit {
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
