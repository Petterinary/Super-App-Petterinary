import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentDataService } from '../../service/data/payment.data.service';
import { LoadingService } from '../../service/loading.service';
import { finalize } from 'rxjs';
import { AlertService } from '../../service/alert-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  @Input() idPayment: number;

  public paymentData: any;
  public paymentMethod = 'Gopay';

  public isActive = 0;

  constructor(
    private router: Router,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private paymentDataService: PaymentDataService
  ) {}

  private getPaymentData() {
    this.paymentDataService.getPaymentById(this.idPayment).subscribe((res) => {
      this.paymentData = res;
    });
  }

  public setActive(index: number) {
    this.isActive = index;
    if (index === 0) {
      this.paymentMethod = 'Gopay';
    } else if (index === 1) {
      this.paymentMethod = 'BCA';
    }
  }

  public async payment() {
    await this.loadingService.present();
    const data = {
      paymentMethod: this.paymentMethod,
      paymentStatus: 2,
    };

    this.paymentDataService
      .updatePayment(this.idPayment, data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          await this.router.navigate([`/confirmation-page-payment`], {});
        },
        async (_) => {
          await this.alertService.alert(
            'Pendaftaran Konsultasi Gagal',
            'Gagal'
          );
        }
      );
  }

  ngOnInit() {
    this.getPaymentData();
  }
}
