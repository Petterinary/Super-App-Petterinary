import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-vet-visit',
  templateUrl: './form-vet-visit.page.html',
  styleUrls: ['./form-vet-visit.page.scss'],
})
export class FormVetVisitPage implements OnInit {
  constructor(private router: Router) {}

  public async toConsultInfoVV() {
    this.router.navigate([`/consultation-info-vv`], {});
  }

  ngOnInit() {}
}
