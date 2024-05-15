import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public dataDokter = [
    {
      idVet: 4,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 7,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      idVet: 5,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 6,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      idVet: 9,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 11,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      idVet: 25,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 16,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },

    {
      idVet: 3,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 20,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      idVet: 2,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 72,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      idVet: 89,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 14,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },

    {
      idVet: 90,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 27,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
    {
      idVet: 29,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
    },
    {
      idVet: 30,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
    },
  ];
  constructor(private router: Router) {}

  public async toServiceSelect(idVet: number) {
    this.router.navigate([`/service-selection/${idVet}`], {});
  }

  ngOnInit() {}
}
