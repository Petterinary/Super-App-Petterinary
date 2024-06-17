import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home-vet',
  templateUrl: './home-vet.page.html',
  styleUrls: ['./home-vet.page.scss'],
})
export class HomeVetPage implements OnInit {
  private userData: any;
  public consultation: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private consultationDataService: ConsultationDataService
  ) {}

  private getConsultation() {
    this.consultationDataService
      .getConsultationByDoctorId(this.userData.doctorId)
      .subscribe((res) => {
        this.consultation = res;
      });
  }

  public async toQueueStatusPageUv(id: number) {
    this.router.navigate([`/consultation-info-uv-vet/${id}`], {});
  }

  public async toQueueStatusPageVv(id: number) {
    this.router.navigate([`/consultation-info-vv-vet/${id}`], {});
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    this.getConsultation();
  }
}
