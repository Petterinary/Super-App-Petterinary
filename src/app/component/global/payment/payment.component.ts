import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  public isActive = 0;

  constructor(private router: Router) {}

  public test: any = [
    {
      totalTagihan: ' 275.000',
      daftarHarga: [
        {
          konsul: 'Biaya Konsultasi',
          harga: ' 25.000',
        },
        {
          konsul: 'Biaya Transportasi',
          harga: ' 250.000',
        },
      ],
    },
  ];

  public setActive(index: number) {
    this.isActive = index;
    if (index === 0) {
      // this.router.navigate([`/home`], {});
    } else if (index === 1) {
      //url
      // this.router.navigate([`/history`], {});
    } else if (index === 2) {
      //url
      // this.router.navigate([`/profile`], {});
    }
  }

  public async toPaymentConfirm() {
    this.router.navigate([`/confirmation-page-payment`], {});
  }

  ngOnInit() {
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.updateActiveIndex(event.urlAfterRedirects);
    //   }
    // });
    // this.updateActiveIndex(this.router.url);
  }
}
