import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { AuthService } from '../service/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-history-vet',
  templateUrl: './history-vet.page.html',
  styleUrls: ['./history-vet.page.scss'],
})
export class HistoryVetPage implements OnInit {
  private userData: any;
  public isLoading: boolean;

  public consultation: any;
  public consultationTemp: any;

  constructor(
    private authService: AuthService,
    private consultationDataService: ConsultationDataService,
    private router: Router
  ) {}

  private getConsultation() {
    this.isLoading = true;
    this.consultationDataService
      .getConsultationByDoctorId(this.userData.doctorId)
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((res) => {
        this.consultation = this.consultationTemp = res;
      });
  }

  searchUserName(event: any) {
    const text = event.detail.value.toLowerCase();
    if (!text || text === '') {
      this.getConsultation();
    } else {
      this.consultation = this.consultationTemp.filter((val) => {
        return val?.userName?.toLowerCase().includes(text);
      });
    }
  }

  public async toRecapKonsulUV(id: number) {
    this.router.navigate([`/consultation-info-uv-vet/${id}`], {});
  }

  public async toRecapKonsulVV(id: number) {
    this.router.navigate([`/consultation-info-vv-vet/${id}`], {});
  }

  handleRefresh(event) {
    this.getConsultation();
    event.target.complete();
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    this.getConsultation();
  }
}
