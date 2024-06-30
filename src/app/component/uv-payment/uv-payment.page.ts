import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uv-payment',
  templateUrl: './uv-payment.page.html',
  styleUrls: ['./uv-payment.page.scss'],
})
export class UvPaymentPage implements OnInit {
  public idPayment: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idPayment = Number(this.route.snapshot.paramMap.get('id'));
  }
}
