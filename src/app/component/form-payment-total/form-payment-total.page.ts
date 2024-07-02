import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { LoadingService } from '../service/loading.service';
import { AlertService } from '../service/alert-service';
import { PaymentDataService } from '../service/data/payment.data.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form-payment-total',
  templateUrl: './form-payment-total.page.html',
  styleUrls: ['./form-payment-total.page.scss'],
})
export class FormPaymentTotalPage implements OnInit {
  private idPayment: number;

  public formGroup: FormGroup;

  constructor(
    private modalControler: ModalController,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private paymentDataService: PaymentDataService,
    private formBuilder: FormBuilder
  ) {
    this.failSave = this.failSave.bind(this);
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      consulAmount: ['', Validators.required],
      consulResult: ['', Validators.required],
      transportAmount: [0],
    });
  }

  public async save() {
    await this.loadingService.present();
    const formData = this.formGroup.value;
    const data = {
      consultationAmount: formData.consulAmount,
      transportAmount: formData.transportAmount,
      consultationResult: formData.consulResult,
      serviceAmount: 25000,
      paymentStatus: 1,
    };

    this.paymentDataService
      .updatePayment(this.idPayment, data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          this.close();
        },
        async (_) => {
          await this.alertService.alert(
            'Pemberian biaya konsultasi gagal',
            'Gagal',
            this.failSave
          );
        }
      );
  }

  private failSave() {
    this.initForm();
    this.formGroup.reset();
  }

  public async close() {
    await this.modalControler.dismiss({
      status: 'success',
    });
  }

  ngOnInit() {
    this.initForm();
  }
}
