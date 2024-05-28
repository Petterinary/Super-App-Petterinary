import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rincian-consul-vv',
  templateUrl: './rincian-consul-vv.page.html',
  styleUrls: ['./rincian-consul-vv.page.scss'],
})
export class RincianConsulVvPage implements OnInit {
  public test: any = [
    {
      noTel: '085211798880',
      namaP: 'Ryu',
      alamat: 'jl. contoh',
      deskripsiKeluhan: 'Kucing muntah-muntah terus',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
