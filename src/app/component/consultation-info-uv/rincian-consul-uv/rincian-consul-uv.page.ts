import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rincian-consul-uv',
  templateUrl: './rincian-consul-uv.page.html',
  styleUrls: ['./rincian-consul-uv.page.scss'],
})
export class RincianConsulUvPage implements OnInit {
  public test: any = [
    {
      noTel: '085211798880',
      namaP: 'Ryu',
      deskripsiKeluhan: 'Kucing muntah-muntah terus',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
