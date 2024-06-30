import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultationDataService } from '../service/data/consultations.data.service';

@Component({
  selector: 'app-vv-live-tracking-vet',
  templateUrl: './vv-live-tracking-vet.page.html',
  styleUrls: ['./vv-live-tracking-vet.page.scss'],
})
export class VvLiveTrackingVetPage implements OnInit {
  public consulStage: any;
  public consultationId: number;
  public distance: string;
  public duration: string;

  constructor(
    private route: ActivatedRoute,
    private consultationDataService: ConsultationDataService
  ) {}

  private getDetailConsul() {
    this.consultationDataService
      .getConsultationByDetailedId(this.consultationId)
      .subscribe((res) => {
        this.consulStage = res;
      });
  }

  handleDistanceDurationEvent(event: { distance: string; duration: string }) {
    this.distance = event.distance;
    this.duration = event.duration;
  }

  ngOnInit() {
    this.consultationId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.consultationId) {
      this.getDetailConsul();
    }
  }
}
