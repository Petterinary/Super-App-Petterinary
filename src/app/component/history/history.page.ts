import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  private userData: any;

  public consultation: any;
  constructor(
    private router: Router,
    private authService: AuthService,
    private consultationDataService: ConsultationDataService
  ) {}

  private getConsultation() {
    this.consultationDataService
      .getConsultationByUserId(this.userData.userId)
      .subscribe((res) => {
        this.consultation = res;
      });
  }

  public async toRecapKonsulUV(id: number) {
    this.router.navigate([`/consultation-info-uv/${id}`], {});
  }

  public async toHisVet() {
    this.router.navigate([`/history-vet`], {});
  }

  public async toRecapKonsulVV(id: number) {
    this.router.navigate([`/consultation-info-vv/${id}`], {});
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    this.getConsultation();
  }
}
