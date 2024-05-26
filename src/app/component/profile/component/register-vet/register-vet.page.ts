import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-vet',
  templateUrl: './register-vet.page.html',
  styleUrls: ['./register-vet.page.scss'],
})
export class RegisterVetPage implements OnInit {
  constructor(private router: Router) {}

  public async submitRegister() {
    this.router.navigate([`profile/confirmation-register`], {});
  }

  ngOnInit() {}
}
