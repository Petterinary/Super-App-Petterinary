import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vv-payment',
  templateUrl: './vv-payment.page.html',
  styleUrls: ['./vv-payment.page.scss'],
})
export class VvPaymentPage implements OnInit {
  public idPayment: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idPayment = Number(this.route.snapshot.paramMap.get('id'));
  }
}
