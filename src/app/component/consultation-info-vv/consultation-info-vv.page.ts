import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-info-vv',
  templateUrl: './consultation-info-vv.page.html',
  styleUrls: ['./consultation-info-vv.page.scss'],
})
export class ConsultationInfoVvPage implements OnInit {
  public consultData: any = [
    {
      tanggalDaftar: '11 Mei 2024',
      namaPemohon: 'Jamarius Quangledangle',
      drTujuan: 'drh. Joni',
      stageStatus: 2,
      alasanGagal:
        'Mohon maaf, saya sudah ada janji temu dengan Pasien lain. Mohon mendaftar di lain hari.',
      status: [
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Penerimaan Konsultasi',
          passStatus: 0,
          waktu: '15:00',
        },
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Konfirmasi Kehadiran',
          passStatus: 1,
          waktu: '15:00',
        },
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Konsultasi',
          passStatus: 2,
          waktu: '15:00',
        },
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Pembayaran Konsultasi',
          passStatus: -1,
          waktu: '15:00',
        },
      ],
    },
  ];

  constructor(private router: Router) {}

  public async toCancelPage() {
    this.router.navigate([`/confirmation-page`], {});
  }

  public async toLTPage() {
    this.router.navigate([`/uv-live-tracking`], {});
  }

  public async toPayPage() {
    this.router.navigate([`/uv-payment`], {});
  }

  public async toLTVVPage() {
    this.router.navigate([`/vv-live-tracking`], {});
  }

  public async toPayVVPage() {
    this.router.navigate([`/vv-payment`], {});
  }

  public async toRecapKonsulVV() {
    this.router.navigate([`/rekap-konsultasi-vv`], {});
  }

  ngOnInit() {}
}
