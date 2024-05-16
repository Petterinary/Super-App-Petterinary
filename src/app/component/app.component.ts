import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

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
  showLandingPage = true;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showLandingPage = false;
      this.router.navigate(['/home']);
    }, 3);
  }
}
