import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success-failed-component',
  templateUrl: './success-failed-component.component.html',
  styleUrls: ['./success-failed-component.component.scss'],
})
export class SuccessFailedComponentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  @Input() logoText: string = '';
  @Input() imageType: string = '';
  @Input() buttonText: string = '';
  @Input() directUrl: string = '';

  public async directTo(directTo: string) {
    this.router.navigate([`/${directTo}`], {});
  }
}
