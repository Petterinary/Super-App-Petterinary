import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../service/loading.service';
import { AlertService } from '../service/alert-service';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { finalize } from 'rxjs';
import * as moment from 'moment';

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
      passStatus: 4,
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
      passStatus: 1,
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
      passStatus: 2,
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

  public async toLTPage() {
    this.router.navigate([`/uv-live-tracking`], {});
  }

  public async toPayPage() {
    this.router.navigate([`/uv-payment`], {});
  }

  public async toLTVVPage() {
    this.router.navigate([`/vv-live-tracking-vet`], {});
  }

  public async toPayVVPage() {
    this.router.navigate([`/vv-payment`], {});
  }

  public async toRecapKonsulVV() {
    this.router.navigate([`/rekap-konsultasi-vv-vet`], {});
  }

  public async toRincianKonsul() {
    this.router.navigate(
      [`/consultation-info-vv-vet/rincian-consul-vv-vet`],
      {}
    );
  }

  public statusStage() {
    if (this.consulStage[0].passStatus === 0) {
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
    } else if (this.consulStage[0].passStatus === 1) {
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
    } else if (this.consulStage[0].passStatus === 2) {
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
    } else if (this.consulStage[0].passStatus === 3) {
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
    } else if (this.consulStage[0].passStatus === 4) {
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
    } else if (this.consulStage[0].passStatus === 6) {
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
