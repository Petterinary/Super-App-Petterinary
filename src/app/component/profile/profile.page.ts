import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public isLogin = false;
  public isDokter = true;
  constructor(private router: Router) {}

  public goRegister() {
    this.router.navigate([`profile/service-selection-register`], {});
  }

  ngOnInit() {}
}
