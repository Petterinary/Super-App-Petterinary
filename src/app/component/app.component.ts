import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLandingPage = true;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showLandingPage = false;
      this.router.navigate(['/home']);
    }, 5);
  }
}
