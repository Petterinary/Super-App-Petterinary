import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultation-info-uv',
  templateUrl: './consultation-info-uv.page.html',
  styleUrls: ['./consultation-info-uv.page.scss'],
})
export class ConsultationInfoUvPage implements OnInit {
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
    this.router.navigate([`/confirmation-page`], {});
  }

  public async toLTPage() {
    this.router.navigate([`/uv-live-tracking`], {});
  }

  public async toPayPage() {
    this.router.navigate([`/uv-payment`], {});
  }

  ngOnInit() {}
}
