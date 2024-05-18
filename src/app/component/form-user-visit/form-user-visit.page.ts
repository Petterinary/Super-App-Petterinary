import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-user-visit',
  templateUrl: './form-user-visit.page.html',
  styleUrls: ['./form-user-visit.page.scss'],
})
export class FormUserVisitPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public async toConsultInfoUV() {
    this.router.navigate([`/consultation-info-uv`], {});
  }
}
