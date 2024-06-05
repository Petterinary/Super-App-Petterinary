import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDataService } from '../service/data/docter.data.serivce';

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

      stat: 0,
      rate: '2.4',
      dist: '0.8km',
    },
    {
      idVet: 7,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      stat: 1,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '1.1km',
    },
    {
      idVet: 5,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      stat: 2,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '1.5km',
    },
    {
      idVet: 6,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      stat: 3,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '2.3km',
    },
    {
      idVet: 9,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      stat: 4,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '2.6km',
    },
    {
      idVet: 11,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '2.9km',
    },
    {
      idVet: 25,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '3km',
    },
    {
      idVet: 16,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '4km',
    },

    {
      idVet: 3,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '5km',
    },
    {
      idVet: 20,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '6km',
    },
    {
      idVet: 2,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '7km',
    },
    {
      idVet: 72,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '8km',
    },
    {
      idVet: 89,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '9km',
    },
    {
      idVet: 14,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '10km',
    },

    {
      idVet: 90,
      nama: 'Drh. Joni',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '10km',
    },
    {
      idVet: 27,
      nama: 'Drh, Ani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '10km',
    },
    {
      idVet: 29,
      nama: 'Drh. Soni',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      rate: '2.4',
      dist: '10km',
    },
    {
      idVet: 30,
      nama: 'Drh, Sani',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      rate: '2.4',
      dist: '10km',
    },
  ];
  constructor(
    private router: Router,
    private doctorDataSerivice: DoctorDataService
  ) {}

  getDoctor() {
    this.doctorDataSerivice.getAllDoctors().subscribe((res) => {
      console.log(res);
    });
  }

  public async toServiceSelect(idVet: number) {
    this.router.navigate([`/service-selection/${idVet}`], {});
  }

  ngOnInit() {
    this.getDoctor();
  }
}
