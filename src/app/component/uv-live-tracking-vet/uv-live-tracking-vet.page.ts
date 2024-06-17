import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uv-live-tracking-vet',
  templateUrl: './uv-live-tracking-vet.page.html',
  styleUrls: ['./uv-live-tracking-vet.page.scss'],
})
export class UvLiveTrackingVetPage implements OnInit {
  public dataUser = [
    {
      idUser: 4,
      koordinatUser: 'w',
      koordinatDokter: 'w',
      nama: 'Jamarius Quangledangle',
      dummyJarak: '',
      jenisKelamin: 'Laki-laki',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
