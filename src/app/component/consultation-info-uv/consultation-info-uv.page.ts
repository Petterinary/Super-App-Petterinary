import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import * as moment from 'moment';
import { LoadingService } from '../service/loading.service';
import { AlertService } from '../service/alert-service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-consultation-info-uv',
  templateUrl: './consultation-info-uv.page.html',
  styleUrls: ['./consultation-info-uv.page.scss'],
})
export class ConsultationInfoUvPage implements OnInit {
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

  public async toCancelPage(id: number) {
    await this.loadingService.present();
    const data = {
      stageStatus: 6,
      passStatus: 6,
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

  public async toLTPage(id: number) {
    this.router.navigate([`/uv-live-tracking/${id}`], {});
  }

  public async toPayPage() {
    this.router.navigate([`/uv-payment`], {});
  }

  public async toRecapKonsulUV() {
    this.router.navigate([`/rekap-konsultasi-uv`], {});
  }

  public async toRincianKonsul() {
    this.router.navigate([`/consultation-info-uv/rincian-consul-uv`], {});
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
