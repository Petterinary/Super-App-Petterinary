import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-history-vet',
  templateUrl: './history-vet.page.html',
  styleUrls: ['./history-vet.page.scss'],
})
export class HistoryVetPage implements OnInit {
  private userData: any;

  public consultation: any;

  constructor(
    private authService: AuthService,
    private consultationDataService: ConsultationDataService,
    private router: Router
  ) {}

  private getConsultation() {
    this.consultationDataService
      .getConsultationByDoctorId(this.userData.doctorId)
      .subscribe((res) => {
        this.consultation = res;
      });
  }

  public async toRecapKonsulUV(id: number) {
    this.router.navigate([`/consultation-info-uv-vet/${id}`], {});
  }

  public async toRecapKonsulVV(id: number) {
    this.router.navigate([`/consultation-info-vv-vet/${id}`], {});
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    this.getConsultation();
  }
}
