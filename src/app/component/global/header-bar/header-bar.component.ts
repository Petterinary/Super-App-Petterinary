import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.scss'],
})
export class HeaderBarComponent implements OnInit {
  private lastRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  onLogoClick() {
    if (this.lastRoute === 'home') {
      this.router.navigate(['/home-vet']);
      this.lastRoute = 'home-vet';
    } else {
      this.router.navigate(['/home']);
      this.lastRoute = 'home';
    }
  }
}
