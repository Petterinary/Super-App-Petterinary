import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoadingService } from '../service/loading.service';
import { ServiceRegistrationFormDataService } from '../service/data/serviceRegistrationForm.data.service';
import { AlertService } from '../service/alert-service';
import * as moment from 'moment';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form-vet-visit',
  templateUrl: './form-vet-visit.page.html',
  styleUrls: ['./form-vet-visit.page.scss'],
})
export class FormVetVisitPage implements OnInit {
  public formGroup: FormGroup;
  public idDoctors: number;
  public userData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loadingService: LoadingService,
    private serviceRegistrationFormDataService: ServiceRegistrationFormDataService,
    private alertService: AlertService,
    private formBuilder: FormBuilder
  ) {
    this.failSave = this.failSave.bind(this);
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      namaHewan: ['', Validators.required],
      tipeHewan: ['', Validators.required],
      keluhan: ['', Validators.required],
    });
  }

  public async save() {
    await this.loadingService.present();
    const formData = this.formGroup.value;
    const data = {
      doctorId: this.idDoctors,
      userId: this.userData.userId,
      visitType: 2,
      address: this.userData.address,
      lat: this.userData.lat,
      lng: this.userData.lng,
      petName: formData.namaHewan,
      petType: formData.tipeHewan,
      complaint: formData.keluhan,
      registrationDate: moment().format('YYYY-MM-DDTHH:mm:ss'),
    };

    this.serviceRegistrationFormDataService
      .createServiceRegistrationForm(data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          await this.alertService.alertAndDismiss(
            'Pendaftaran Konsultasi Berhasil',
            'Berhasil',
            this.goHistory()
          );
        },
        async (_) => {
          await this.alertService.alert(
            'Pendaftaran Konsultasi Gagal',
            'Gagal',
            this.failSave
          );
        }
      );
  }

  private goHistory() {
    this.router.navigateByUrl('/history');
  }

  private failSave() {
    this.initForm();
    this.formGroup.reset();
  }

  async ngOnInit() {
    this.initForm();
    this.userData = await this.authService.getUserData();
    this.idDoctors = Number(this.route.snapshot.paramMap.get('vetId'));
  }
}
