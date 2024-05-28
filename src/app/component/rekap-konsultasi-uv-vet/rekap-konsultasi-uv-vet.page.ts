import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekap-konsultasi-uv-vet',
  templateUrl: './rekap-konsultasi-uv-vet.page.html',
  styleUrls: ['./rekap-konsultasi-uv-vet.page.scss'],
})
export class RekapKonsultasiUvVetPage implements OnInit {
  public test: any = [
    {
      totalTagihan: ' 275.000',
      noTel: '085211798880',
      namaP: 'Ryu',
      hasilKon: 'Kucing terkena mual biasa',
      deskripsiKeluhan: 'Kucing muntah-muntah terus',
      bayarDengan: 0,
      sudahDibayar: 1,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
