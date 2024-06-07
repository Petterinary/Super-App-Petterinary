import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uv-live-tracking',
  templateUrl: './uv-live-tracking.page.html',
  styleUrls: ['./uv-live-tracking.page.scss'],
})
export class UvLiveTrackingPage implements OnInit {
  public dataDokter = [
    {
      idVet: 4,
      koordinatUser: 'w',
      koordinatDokter: 'w',
      nama: 'Drh. Joni',
      dummyJarak: '4.1km',
      jenisKelamin: 'Laki-laki',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
