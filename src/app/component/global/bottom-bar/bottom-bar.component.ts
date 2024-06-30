import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent implements OnInit {
  public isActive = 0;
  public userData: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveIndex(event.urlAfterRedirects);
      }
    });
    this.updateActiveIndex(this.router.url);
  }

  private async getUser() {
    this.userData = await this.authService.getUserData();
  }

  public setActive(index: number) {
    this.isActive = index;
    if (this.userData) {
      if (this.userData.userType === '1') {
        if (index === 0) {
          this.router.navigate([`/home`], {});
        } else if (index === 1) {
          this.router.navigate([`/history`], {});
        } else if (index === 2) {
          this.router.navigate([`/profile`], {});
        }
      } else {
        if (index === 0) {
          this.router.navigate([`/home-vet`], {});
        } else if (index === 1) {
          this.router.navigate([`/history-vet`], {});
        } else if (index === 2) {
          this.router.navigate([`/profile`], {});
        }
      }
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
