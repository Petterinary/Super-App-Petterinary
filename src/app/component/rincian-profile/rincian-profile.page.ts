import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { DoctorDataService } from '../service/data/doctor.data.serivce';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rincian-profile',
  templateUrl: './rincian-profile.page.html',
  styleUrls: ['./rincian-profile.page.scss'],
})
export class RincianProfilePage implements OnInit {
  public userData: any;
  public doctorData: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private doctorDataService: DoctorDataService
  ) {}

  public async getUser() {
    this.userData = await this.authService.getUserData();
    if (this.userData.userType === '2') {
      this.getDoctor();
    }
  }

  public getDoctor() {
    this.doctorDataService
      .getDoctorById(this.userData.doctorId)
      .subscribe((res) => {
        this.doctorData = res;
        console.log(this.doctorData);
      });
  }

  goProfile() {
    this.router.navigateByUrl('/profile');
  }

  ngOnInit() {
    this.getUser();
  }
}
