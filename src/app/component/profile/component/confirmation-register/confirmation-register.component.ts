import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation-register',
  templateUrl: './confirmation-register.component.html',
  styleUrls: ['./confirmation-register.component.scss'],
})
export class ConfirmationRegisterComponent implements OnInit {
  public status!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.status = params['status'];
    });
  }
}
