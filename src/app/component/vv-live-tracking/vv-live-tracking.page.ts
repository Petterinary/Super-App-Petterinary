import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vv-live-tracking',
  templateUrl: './vv-live-tracking.page.html',
  styleUrls: ['./vv-live-tracking.page.scss'],
})
export class VvLiveTrackingPage implements OnInit {
  public dataDokter = [
    {
      idDokter: 4,
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
