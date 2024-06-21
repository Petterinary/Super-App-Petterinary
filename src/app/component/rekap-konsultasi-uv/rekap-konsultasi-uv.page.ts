import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceRegistrationFormDataService } from '../service/data/serviceRegistrationForm.data.service';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { PaymentDataService } from '../service/data/payment.data.service';
import { forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-rekap-konsultasi-uv',
  templateUrl: './rekap-konsultasi-uv.page.html',
  styleUrls: ['./rekap-konsultasi-uv.page.scss'],
})
export class RekapKonsultasiUvPage implements OnInit {
  private regisformConsulId: number;
  public data: any = {};

  constructor(
    private route: ActivatedRoute,
    private consultationDataService: ConsultationDataService,
    private paymentDataService: PaymentDataService,
    private regisFormConsul: ServiceRegistrationFormDataService
  ) {}

  private fetchData() {
    this.consultationDataService
      .getConsultationByDetailedId(this.regisformConsulId)
      .pipe(
        switchMap((consulData) => {
          this.data.consulData = consulData;
          const formId = consulData[0].serviceRegistrationFormId;
          const paymentId = consulData[0].paymentId;

          return forkJoin({
            formData:
              this.regisFormConsul.getServiceRegistrationFormById(formId),
            paymentData: this.paymentDataService.getPaymentById(paymentId),
          });
        })
      )
      .subscribe(({ formData, paymentData }) => {
        this.data.formData = formData;
        this.data.paymentData = paymentData;
        this.combineData();
      });
  }

  private combineData() {
    this.data = {
      userName: this.data.consulData[0].userName,
      phoneNumber: this.data.formData.userPhoneNumber,
      complaint: this.data.formData.complaint,
      registrationDate: this.data.formData.registrationDate,
      paymentStatus: this.data.paymentData.paymentStatus,
      consultationAmount: this.data.paymentData.consultationAmount,
      transportAmount: this.data.paymentData.transportAmount,
      serviceAmount: this.data.paymentData.serviceAmount,
      totalAmount: this.data.paymentData.totalAmount,
      paymentMethod: this.data.paymentData.paymentMethod,
    };
    console.log(this.data);
  }

  ngOnInit() {
    this.regisformConsulId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchData();
  }
}
