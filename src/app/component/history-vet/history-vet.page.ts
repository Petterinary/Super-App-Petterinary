import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-vet',
  templateUrl: './history-vet.page.html',
  styleUrls: ['./history-vet.page.scss'],
})
export class HistoryVetPage implements OnInit {
  public dataHIstory = [
    {
      idUser: 4,
      idTypeVisit: 0,
      nama: 'Jamarius Quangledangle',
      keluhan: 'Kucing muntah-muntah terus',
      jenisKelamin: 'Laki-laki',
    },
    {
      idUser: 4,
      idTypeVisit: 1,
      nama: 'Jamarius Quangledangle',
      keluhan: 'Kucing patah tulang',
      jenisKelamin: 'Perempuan',
    },
    {
      idUser: 5,
      idTypeVisit: 1,
      nama: 'Roberto Coochiesmith',
      keluhan: 'Sapi tidak nafsu makan',
      jenisKelamin: 'Laki-laki',
    },
  ];
  constructor(private router: Router) {}

  public async toRecapKonsulUV() {
    this.router.navigate([`/consultation-info-uv-vet`], {});
  }

  public async toRecapKonsulVV() {
    this.router.navigate([`/consultation-info-vv-vet`], {});
  }

  ngOnInit() {}
}
