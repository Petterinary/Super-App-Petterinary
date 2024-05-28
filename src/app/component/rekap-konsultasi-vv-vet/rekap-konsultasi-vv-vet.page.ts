import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekap-konsultasi-vv-vet',
  templateUrl: './rekap-konsultasi-vv-vet.page.html',
  styleUrls: ['./rekap-konsultasi-vv-vet.page.scss'],
})
export class RekapKonsultasiVvVetPage implements OnInit {
  public test: any = [
    {
      totalTagihan: ' 275.000',
      noTel: '085211798880',
      namaP: 'Jamarius Quangledangle',
      hasilKon: 'Kucing terkena mual biasa',
      deskripsiKeluhan: 'Kucing muntah-muntah terus',
      bayarDengan: 'Gopay',
      sudahDibayar: 0,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
