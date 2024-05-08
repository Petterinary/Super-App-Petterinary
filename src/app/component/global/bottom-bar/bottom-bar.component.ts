import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  public isActive = 0;

  constructor() {}

  public setActive(index: number) {
    this.isActive = index;
    if (index === 0) {
      //url
    } else if (index === 1) {
      //url
    } else if (index === 2) {
      //url
    }
  }

  ngOnInit() {}
}
