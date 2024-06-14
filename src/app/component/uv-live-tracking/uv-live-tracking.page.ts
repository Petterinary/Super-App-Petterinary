// uv-live-tracking.page.ts
import { Component, OnInit } from '@angular/core';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

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
      dummyJarak: '',
      dummyDuration: '',
      jenisKelamin: 'Laki-laki',
    },
  ];

  constructor(private tracker: TrackerService) {}

  updateDistanceAndDuration(distance: string, duration: string) {
    this.dataDokter[0].dummyJarak = distance;
    this.dataDokter[0].dummyDuration = duration;
  }

  ngOnInit() {}
}
