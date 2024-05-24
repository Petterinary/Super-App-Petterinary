import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekap-konsultasi-uv',
  templateUrl: './rekap-konsultasi-uv.page.html',
  styleUrls: ['./rekap-konsultasi-uv.page.scss'],
})
export class RekapKonsultasiUvPage implements OnInit {
  public test: any = [
    {
      totalTagihan: ' 275.000',
      noTel: '085211798880',
      namaP: 'Ryu',
      hasilKon: 'Kucing terkena mual biasa',
      deskripsiKeluhan: 'Kucing muntah-muntah terus',
      bayarDengan: 'Gopay',
      sudahDibayar: 0,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
