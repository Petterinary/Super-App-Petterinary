import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { AuthService } from '../service/auth.service';
import { ConsultationDataService } from '../service/data/consultations.data.service';
import { finalize } from 'rxjs';
import { LoadingService } from '../service/loading.service';

@Component({
  selector: 'app-form-user-visit',
  templateUrl: './form-user-visit.page.html',
  styleUrls: ['./form-user-visit.page.scss'],
})
export class FormUserVisitPage implements OnInit {
  public formGroup: FormGroup;
  public idDoctors: number;
  public userData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private loadingService: LoadingService,
    private consultationDataService: ConsultationDataService,
    private formBuilder: FormBuilder
  ) {}

  async ngOnInit() {
    this.initForm();
    this.userData = await this.authService.getUserData();
    console.log(this.userData);
    this.idDoctors = Number(this.route.snapshot.paramMap.get('vetId'));
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      namaHewan: ['', Validators.required],
      tipeHewan: ['', Validators.required],
      noTelp: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      keluhan: ['', Validators.required],
    });
  }

  public async save() {
    await this.loadingService.present();
    const formData = this.formGroup.value;
    const data = {
      doctorId: this.idDoctors,
      userId: 1,
      visitType: 1,
      address: 'jakarta',
      lat: '-6.9138192',
      lng: '107.198371',
      petName: formData.namaHewan,
      petType: formData.tipeHewan,
      complaint: formData.keluhan,
      registrationDate: '5 Juni 2024 13:00:00',
    };

    this.consultationDataService
      .createConsultation(data)
      .pipe(finalize(async () => await this.loadingService.dismiss()))
      .subscribe(
        async () => {
          await this.router.navigate(['confirmation'], {
            queryParams: {
              status: 'Pendaftaran berhasil',
              url: 'history',
              text: 'History',
              type: 'Check',
            },
          });
        },
        async (_) => {
          await this.router.navigate(['confirmation'], {
            queryParams: {
              status: 'Pendaftaran gagal',
              url: `form-user-visit/${this.idDoctors}`,
              text: 'Form Pendaftaran User Visit',
              type: 'Fail',
            },
          });
        }
      );
  }

  public async toConsultInfoUV() {
    if (this.formGroup.valid) {
      this.router.navigate([`/consultation-info-uv`], {});
    } else {
      console.log('Form is not valid');
    }
  }
}
