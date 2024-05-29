import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rincian-consul-uv-vet',
  templateUrl: './rincian-consul-uv-vet.page.html',
  styleUrls: ['./rincian-consul-uv-vet.page.scss'],
})
export class RincianConsulUvVetPage implements OnInit {
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
