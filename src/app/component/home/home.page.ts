import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDataService } from '../service/data/doctor.data.serivce';
import { AuthService } from '../service/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public doctors: any;
  public doctorsTemp: any;
  private userData: any;
  public distance: number;
  public isLoading: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private doctorDataSerivice: DoctorDataService
  ) {}

  async getDoctor() {
    this.isLoading = true;
    this.doctorDataSerivice
      .getAllDoctors()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
        this.doctors = this.doctorsTemp = res;
        this.filterDoctor(3);
      });
  }

  searchDoctor(event: any) {
    const text = event.detail.value.toLowerCase();
    if (!text || text === '') {
      this.getDoctor();
    } else {
      this.doctors = this.doctorsTemp.filter((val) => {
        return val?.name?.toLowerCase().includes(text);
      });
    }
  }

  public filterDoctor(maxDistance: number) {
    this.doctors = this.doctorsTemp
      .filter((doctor) => doctor.distance && doctor.distance < maxDistance)
      .sort((a, b) => a.distance - b.distance);
  }

  filterDistance(ev: any) {
    if (ev.detail.value) {
      const maxDistance = parseInt(ev.detail.value);
      return this.filterDoctor(maxDistance);
    }
  }

  public async toServiceSelect(idVet: number) {
    this.router.navigate([`/service-selection/${idVet}`], {});
  }

  handleRefresh(event) {
    this.getDoctor();
    event.target.complete();
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    this.getDoctor();
  }
}
