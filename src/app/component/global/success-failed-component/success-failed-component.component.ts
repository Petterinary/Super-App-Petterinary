import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-failed-component',
  templateUrl: './success-failed-component.component.html',
  styleUrls: ['./success-failed-component.component.scss'],
})
export class SuccessFailedComponentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() logoText: string = '';
  @Input() imageType: string = '';
  @Input() buttonText: string = '';
}
