import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.page.html',
  styleUrls: ['./confirmation-page.page.scss'],
})
export class ConfirmationPagePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
