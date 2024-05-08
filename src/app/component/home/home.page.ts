import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public dataDokter = [
    {
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
