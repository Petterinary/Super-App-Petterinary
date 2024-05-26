import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public type: string = '';
  public title = 'Form Pendaftaran';
  public isRincian: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public async submitRegister() {
    this.router.navigate([`profile/confirmation-register`], {});
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.type = params['type'];
      if (this.type === 'lihat') {
        this.isRincian = true;
        this.title = 'Rincian Profile';
      } else {
        this.isRincian = false;
        this.title = 'Form Pendaftaran';
      }
    });
  }
}
