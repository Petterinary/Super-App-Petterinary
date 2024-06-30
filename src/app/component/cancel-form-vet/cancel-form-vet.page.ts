import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-form-vet',
  templateUrl: './cancel-form-vet.page.html',
  styleUrls: ['./cancel-form-vet.page.scss'],
})
export class CancelFormVetPage implements OnInit {
  constructor(private router: Router) {}

  public async toCancelPageConf() {
    this.router.navigate([`/cancel-confirm-vet`], {});
  }

  ngOnInit() {}
}
