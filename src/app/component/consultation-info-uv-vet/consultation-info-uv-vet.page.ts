import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-info-uv-vet',
  templateUrl: './consultation-info-uv-vet.page.html',
  styleUrls: ['./consultation-info-uv-vet.page.scss'],
})
export class ConsultationInfoUvVetPage implements OnInit {
  public consultData: any = [
    {
      idKonsultasi: 0,
      tanggalDaftar: '11 Mei 2024',
      namaPemohon: 'Jamarius Quangledangle',
      drTujuan: 'drh. Joni',
      stageStatus: 1,
      alasanGagal:
        'Mohon maaf, saya sudah ada janji temu dengan Pasien lain. Mohon mendaftar di lain hari.',
      status: [
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Penerimaan Konsultasi',
          passStatus: 1,
          waktu: '15:00',
        },
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Konfirmasi Kehadiran',
          passStatus: 0,
          waktu: '15:00',
        },
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Konsultasi',
          passStatus: -1,
          waktu: '15:00',
        },
        {
          tanggalStatusPass: '11 Mei 2024',
          statusInfo: 'Pembayaran Konsultasi',
          passStatus: -1,
          waktu: '15:00',
        },
      ],
      // gagal: [
      //   {
      //     modDate: '23 Okt 2023 15:55',
      //     modDetail: 'Dilihat oleh Ka Lulu',
      //     modGmail: 'haihrdperiksa@gmail.com4',
      //   },
      //   {
      //     modDate: '23 Okt 2023 15:45',
      //     modDetail: 'Dikirim oleh Ka Lulu',
      //     modGmail: 'haihrdperiksa@gmail.com3',
      //   },
      //   {
      //     modDate: '23 Okt 2023 15:25',
      //     modDetail: 'Dibuat oleh by Ka Lulu',
      //     modGmail: 'haihrdperiksa@gmail.com2',
      //   },
      //   {
      //     modDate: '23 Okt 2023 15:55',
      //     modDetail: 'Dilihat oleh Ka Lulu',
      //     modGmail: 'haihrdperiksa@gmail.com4',
      //   },
      //   {
      //     modDate: '23 Okt 2023 15:45',
      //     modDetail: 'Dikirim oleh Ka Lulu',
      //     modGmail: 'haihrdperiksa@gmail.com3',
      //   },
      //   {
      //     modDate: '23 Okt 2023 15:25',
      //     modDetail: 'Dibuat oleh by Ka Lulu',
      //     modGmail: 'haihrdperiksa@gmail.com2',
      //   },
      // ],
      // docFile: [
      //   {
      //     fileName: '',
      //   },
      // ],
    },
  ];

  constructor(private router: Router) {}

  public async toCancelPage() {
    this.router.navigate([`/cancel-form-vet`], {});
  }

  public async toAcceptPage() {
    this.router.navigate([`/confirmation-page-vet`], {});
  }

  public async toLTPage() {
    this.router.navigate([`/uv-live-tracking-vet`], {});
  }

  public async toPayPage() {
    this.router.navigate([`/uv-payment`], {});
  }

  public async toRecapKonsulUV() {
    this.router.navigate([`/rekap-konsultasi-uv-vet`], {});
  }

  public async toRincianKonsul() {
    this.router.navigate(
      [`/consultation-info-uv-vet/rincian-consul-uv-vet`],
      {}
    );
  }

  ngOnInit() {}
}
