import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.page.html',
  styleUrls: ['./service-selection.page.scss'],
})
export class ServiceSelectionPage implements OnInit {
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

  public idDoctors: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public async toServiceSelect(event: number) {
    if (event === 1) {
      this.router.navigate([`/form-user-visit/${this.idDoctors}`], {});
    } else if (event === 2) {
      this.router.navigate([`/form-vet-visit`], {});
    }
  }

  ngOnInit() {
    this.idDoctors = Number(this.route.snapshot.paramMap.get('vetId'));
  }
}
