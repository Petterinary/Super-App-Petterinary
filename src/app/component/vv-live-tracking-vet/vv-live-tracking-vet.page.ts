import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vv-live-tracking-vet',
  templateUrl: './vv-live-tracking-vet.page.html',
  styleUrls: ['./vv-live-tracking-vet.page.scss'],
})
export class VvLiveTrackingVetPage implements OnInit {
  public dataUser = [
    {
      idUser: 4,
      koordinatUser: 'w',
      koordinatDokter: 'w',
      nama: 'Jamarius Quangledangle',
      dummyJarak: '4.1km',
      jenisKelamin: 'Perempuan',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
