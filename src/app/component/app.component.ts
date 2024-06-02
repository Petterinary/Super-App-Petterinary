import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AuthService } from './service/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(0)' }),
        animate(
          '500ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in-out',
          style({ opacity: 0, transform: 'translateY(-20px)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  public showLandingPage = true;
  public hideHeaderFooter = false;
  private routesToHideHeaderFooter = [
    '/login',
    '/profile/service-selection-register',
    '/profile/register',
    '/profile/register-vet',
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.hideHeaderFooter = this.routesToHideHeaderFooter.includes(
            event.url
          );
        }
      });
  }

  async ngOnInit() {
    const userData = await this.authService.getUserData();
    setTimeout(async () => {
      this.showLandingPage = false;
      if (userData) {
        if (userData.userType === 0) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/home-vet']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    }, 5000);
  }
}
