import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDataService } from '../service/data/docter.data.serivce';

@Component({
  selector: 'app-home-vet',
  templateUrl: './home-vet.page.html',
  styleUrls: ['./home-vet.page.scss'],
})
export class HomeVetPage implements OnInit {
  public antriUser = [
    {
      idUser: 4,
      nama: 'Jamarius Quangledangle',
      specialis: 'Anjing',
      umur: 24,
      jenisKelamin: 'Laki-laki',

      stat: 0,
      idTypeVisit: 0,
    },
    {
      idUser: 7,
      nama: 'Jamarius Quangledangle',
      specialis: 'Kucing',
      umur: 24,
      stat: 1,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 1,
    },
    {
      idUser: 5,
      nama: 'Bartholomew Quanvilius Pringle the 6th',
      specialis: 'Anjing',
      umur: 24,
      stat: 2,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 0,
    },
    {
      idUser: 6,
      nama: 'Quandale Dingle',
      specialis: 'Kucing',
      umur: 24,
      stat: 3,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 0,
    },
    {
      idUser: 9,
      nama: 'Quanlingling Pringle',
      specialis: 'Anjing',
      umur: 24,
      stat: 3,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 0,
    },
    {
      idUser: 11,
      nama: 'Quandale Dingle',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 0,
    },
    {
      idUser: 25,
      nama: 'Roberta Bootysmith Tarnations',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 0,
    },
    {
      idUser: 16,
      nama: 'Henry Bartholomew Dinglenut',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 0,
    },

    {
      idUser: 3,
      nama: 'Darleen Dingle',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 1,
    },
    {
      idUser: 20,
      nama: 'Jamarius Quangledangle',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 1,
    },
    {
      idUser: 2,
      nama: 'Henry Chewbacca Jenkins',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 1,
    },
    {
      idUser: 72,
      nama: 'Carl Johnson',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 1,
    },
    {
      idUser: 89,
      nama: 'Obi Anakin Skywalking',
      specialis: 'Anjing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 1,
    },
    {
      idUser: 14,
      nama: 'Solo Jabba Greedo',
      specialis: 'Kucing',
      umur: 24,
      stat: 0,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 0,
    },

    {
      idUser: 90,
      nama: 'Anthony Cucumber',
      specialis: 'Anjing',
      umur: 24,
      stat: 3,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 0,
    },
    {
      idUser: 27,
      nama: 'Roberta Googoogaagaa',
      specialis: 'Kucing',
      umur: 24,
      stat: 3,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 0,
    },
    {
      idUser: 29,
      nama: 'Duke Dookie The 7th',
      specialis: 'Anjing',
      umur: 24,
      stat: 2,
      jenisKelamin: 'Laki-laki',
      idTypeVisit: 0,
    },
    {
      idUser: 30,
      nama: 'Coochie Smith',
      specialis: 'Kucing',
      umur: 24,
      stat: 1,
      jenisKelamin: 'Perempuan',
      idTypeVisit: 0,
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

  public async toQueueStatusPageUv() {
    this.router.navigate([`/consultation-info-uv-vet`], {});
  }

  public async toQueueStatusPageVv() {
    this.router.navigate([`/consultation-info-vv-vet`], {});
  }

  ngOnInit() {
    this.getDoctor();
  }
}
