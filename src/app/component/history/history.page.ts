import { Component, OnInit } from '@angular/core';

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
      keluhan: 'Anjing terluka dimata',
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
  constructor() {}

  ngOnInit() {}
}
