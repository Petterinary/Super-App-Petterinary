import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-selection-register',
  templateUrl: './service-selection-register.component.html',
  styleUrls: ['./service-selection-register.component.scss'],
})
export class ServiceSelectionRegisterComponent implements OnInit {
  constructor(private router: Router) {}

  public async toServiceSelect(event: number) {
    if (event === 1) {
      this.router.navigate([`profile/register`], {});
    } else if (event === 2) {
      this.router.navigate([`profile/register-vet`], {});
    }
  }
  ngOnInit() {}
}
