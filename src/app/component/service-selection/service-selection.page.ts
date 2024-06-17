import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-selection',
  templateUrl: './service-selection.page.html',
  styleUrls: ['./service-selection.page.scss'],
})
export class ServiceSelectionPage implements OnInit {
  public idDoctors: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public async toServiceSelect(event: number) {
    if (event === 1) {
      this.router.navigate([`/form-user-visit/${this.idDoctors}`], {});
    } else if (event === 2) {
      this.router.navigate([`/form-vet-visit/${this.idDoctors}`], {});
    }
  }

  ngOnInit() {
    this.idDoctors = Number(this.route.snapshot.paramMap.get('vetId'));
  }
}
