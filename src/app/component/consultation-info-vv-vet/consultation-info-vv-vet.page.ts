import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../service/loading.service';
import { AlertService } from '../service/alert-service';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { finalize } from 'rxjs';
import * as moment from 'moment';
import { RincianConsulVvComponent } from '../rincian-consul-vv/rincian-consul-vv.component';
import { ModalController } from '@ionic/angular';
import { FormPaymentTotalPage } from '../form-payment-total/form-payment-total.page';

@Component({
  selector: 'app-consultation-info-vv-vet',
  templateUrl: './consultation-info-vv-vet.page.html',
  styleUrls: ['./consultation-info-vv-vet.page.scss'],
})
export class ConsultationInfoVvVetPage implements OnInit {
  public consulStage: any;
  private consultationId: number;
  public status: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private modalControler: ModalController,
    private consultationDataService: ConsultationDataService
  ) {}

  private getDetailConsul() {
    this.consultationDataService
      .getConsultationByDetailedId(this.consultationId)
      .subscribe((res) => {
        this.consulStage = res;
        this.statusStage();
      });
  }

  public formatTanggal(date: string) {
    return moment(date).format('DD MMM YYYY HH:mm:ss');
  }

  public async cancelConsul(id: number) {
    await this.loadingService.present();
    const data = {
      stageStatus: 4,
      idUser: this.consulStage[0].userId,
      idDoctor: this.consulStage[0].doctorId,
      idRegistrationForm: this.consulStage[0].serviceRegistrationFormId,
    };
    this.consultationDataService
      .updateConsultation(id, data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          await this.alertService.alert(
            'Konsultasi berhasil dibatalkan',
            'Berhasil',
            this.getDetailConsul()
          );
        },
        async (_) => {
          await this.alertService.alert(
            'Konsultasi gagal untuk dibatalkan, silahkan coba kembali',
            'Gagal'
          );
        }
      );
  }

  public async acceptConsul(id: number) {
    await this.loadingService.present();
    const data = {
      stageStatus: 1,
      idUser: this.consulStage[0].userId,
      idDoctor: this.consulStage[0].doctorId,
      idRegistrationForm: this.consulStage[0].serviceRegistrationFormId,
    };
    this.consultationDataService
      .updateConsultation(id, data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          await this.alertService.alert(
            'Konsultasi berhasil diterima',
            'Berhasil',
            this.getDetailConsul()
          );
        },
        async (_) => {
          await this.alertService.alert(
            'Konsultasi gagal untuk diterima, silahkan coba kembali',
            'Gagal'
          );
        }
      );
  }

  public async doneConsul(id: number) {
    await this.loadingService.present();
    const data = {
      stageStatus: 2,
      idUser: this.consulStage[0].userId,
      idDoctor: this.consulStage[0].doctorId,
      idRegistrationForm: this.consulStage[0].serviceRegistrationFormId,
    };
    this.consultationDataService
      .updateConsultation(id, data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          await this.alertService.alert(
            'Konsultasi berhasil diselesaikan',
            'Berhasil',
            this.getDetailConsul()
          );
        },
        async (_) => {
          await this.alertService.alert(
            'Konsultasi gagal untuk diselesaikan, silahkan coba kembali',
            'Gagal'
          );
        }
      );
  }

  async openInputPayment() {
    const modal = await this.modalControler.create({
      component: FormPaymentTotalPage,
      componentProps: {
        idPayment: this.consulStage[0].paymentId,
      },
    });

    modal.onDidDismiss().then((res) => {
      if (!res.data) {
        return;
      }

      this.doneConsul(this.consulStage[0].consultationId);
    });

    await modal.present();
    const modalElement = await this.modalControler.getTop();
    if (modalElement) {
      this.applyCustomStyles(modalElement);
    }
  }

  async openRincian(id: number) {
    const modal = await this.modalControler.create({
      component: RincianConsulVvComponent,
      componentProps: {
        idRegisForm: id,
      },
    });

    await modal.present();
    const modalElement = await this.modalControler.getTop();
    if (modalElement) {
      this.applyCustomStyles(modalElement);
    }
  }

  applyCustomStyles(modalElement: HTMLIonModalElement) {
    const modalWrapper =
      modalElement.shadowRoot?.querySelector('.modal-wrapper');

    if (modalWrapper) {
      modalWrapper.setAttribute(
        'style',
        'width: 90%; height: 60%; border-radius: 10px'
      );
    }
  }

  public async toLTPage(id: number) {
    this.router.navigate([`/vv-live-tracking-vet/${id}`], {});
  }

  public async toPayPage() {
    this.router.navigate([`/uv-payment`], {});
  }

  public async toPayVVPage() {
    this.router.navigate([`/vv-payment`], {});
  }

  public async toRecapKonsulVV() {
    this.router.navigate([`/rekap-konsultasi-vv-vet`], {});
  }

  public statusStage() {
    if (this.consulStage[0].stageStatus === 0) {
      this.status = [
        {
          statusInfo: 'Permohonan terkirim',
          passStatus: 1,
        },
        {
          statusInfo: 'Menunggu konfirmasi dari dokter',
          passStatus: 0,
        },
        {
          statusInfo: 'Konsultasi berlangsung',
          passStatus: 3,
        },
        {
          statusInfo: 'Menunggu pembayaran konsultasi',
          passStatus: 3,
        },
      ];
    } else if (this.consulStage[0].stageStatus === 1) {
      this.status = [
        {
          statusInfo: 'Permohonan terkirim',
          passStatus: 1,
        },
        {
          statusInfo: 'Dokter telah menerima permohonan konsultasi',
          passStatus: 1,
        },
        {
          statusInfo: 'Konsultasi berlangsung',
          passStatus: 0,
        },
        {
          statusInfo: 'Menunggu pembayaran konsultasi',
          passStatus: 3,
        },
      ];
    } else if (this.consulStage[0].stageStatus === 2) {
      this.status = [
        {
          statusInfo: 'Permohonan terkirim',
          passStatus: 1,
        },
        {
          statusInfo: 'Dokter telah menerima permohonan konsultasi',
          passStatus: 1,
        },
        {
          statusInfo: 'Konsultasi sudah selesai',
          passStatus: 1,
        },
        {
          statusInfo: 'Menunggu pembayaran konsultasi',
          passStatus: 0,
        },
      ];
    } else if (this.consulStage[0].stageStatus === 3) {
      this.status = [
        {
          statusInfo: 'Permohonan terkirim',
          passStatus: 1,
        },
        {
          statusInfo: 'Dokter telah menerima permohonan konsultasi',
          passStatus: 1,
        },
        {
          statusInfo: 'Konsultasi sudah selesai',
          passStatus: 1,
        },
        {
          statusInfo: 'Pembayaran konsultasi sudah selesai',
          passStatus: 1,
        },
      ];
    } else if (this.consulStage[0].stageStatus === 4) {
      this.status = [
        {
          statusInfo: 'Permohonan terkirim',
          passStatus: 1,
        },
        {
          statusInfo: 'Konsultasi dibatalkan oleh dokter',
          passStatus: 2,
        },
      ];
    } else if (this.consulStage[0].stageStatus === 6) {
      this.status = [
        {
          statusInfo: 'Permohonan terkirim',
          passStatus: 1,
        },
        {
          statusInfo: 'Konsultasi dibatalkan oleh pemohon',
          passStatus: 2,
        },
      ];
    }
  }

  ngOnInit() {
    this.consultationId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.consultationId) {
      this.getDetailConsul();
    }
  }
}
