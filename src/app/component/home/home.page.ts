import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDataService } from '../service/data/doctor.data.serivce';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public doctors: any;
  private userData: any;
  public distance: number;

  constructor(
    private router: Router,
    private authService: AuthService,
    private doctorDataSerivice: DoctorDataService
  ) {}

  getDoctor() {
    this.doctorDataSerivice.getAllDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  public async toServiceSelect(idVet: number) {
    this.router.navigate([`/service-selection/${idVet}`], {});
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    this.getDoctor();
  }
}
