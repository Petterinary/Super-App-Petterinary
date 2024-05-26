import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  public dataHIstory = [
    {
      idVet: 4,
      nama: 'Drh. Joni',
      keluhan: 'Kucing muntah-muntah terus',
      jenisKelamin: 'Laki-laki',
    },
    {
      idVet: 7,
      nama: 'Drh, Ani',
      keluhan: 'Kucing patah tulang',
      jenisKelamin: 'Perempuan',
    },
    {
      idVet: 5,
      nama: 'Drh. Soni',
      keluhan: 'Sapi tidak nafsu makan',
      jenisKelamin: 'Laki-laki',
    },
  ];
  constructor(private router: Router) {}

  public async toRecapKonsulUV() {
    this.router.navigate([`/rekap-konsultasi-uv`], {});
  }

  ngOnInit() {}
}
