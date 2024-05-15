import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  public isActive = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveIndex(event.urlAfterRedirects);
      }
    });
    this.updateActiveIndex(this.router.url);
  }

  public setActive(index: number) {
    this.isActive = index;
    if (index === 0) {
      this.router.navigate([`/home`], {});
    } else if (index === 1) {
      //url
      this.router.navigate([`/history`], {});
    } else if (index === 2) {
      //url
      this.router.navigate([`/profile`], {});
    }
  }

  private updateActiveIndex(url: string) {
    if (url.includes('/home')) {
      this.isActive = 0;
    } else if (url.includes('/history')) {
      this.isActive = 1;
    } else if (url.includes('/profile')) {
      this.isActive = 2;
    }
  }
}
