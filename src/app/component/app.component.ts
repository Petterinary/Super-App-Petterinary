import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public landingPage = true;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.landingPage = false;
      this.router.navigate(['/main-menu']);
    }, 5000);
  }
}
