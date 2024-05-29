import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rincian-consul-vv-vet',
  templateUrl: './rincian-consul-vv-vet.page.html',
  styleUrls: ['./rincian-consul-vv-vet.page.scss'],
})
export class RincianConsulVvVetPage implements OnInit {
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
