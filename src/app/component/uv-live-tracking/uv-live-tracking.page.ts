import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-uv-live-tracking',
  templateUrl: './uv-live-tracking.page.html',
  styleUrls: ['./uv-live-tracking.page.scss'],
})
export class UvLiveTrackingPage implements OnInit {
  public dataDokter = [
    {
      idVet: 4,
      koordinatUser: 'w',
      koordinatDokter: 'w',
      nama: 'Drh. Joni',
      dummyJarak: '',
      dummyDuration: '',
      jenisKelamin: 'Laki-laki',
    },
  ];
  form: FormGroup;
  isSubmitted = false;
  openModal = false;

  constructor(private tracker: TrackerService) {}

  openLocationModal() {
    this.openModal = true;
    this.formData();
  }

  formData() {
    this.form = new FormGroup({
      lat: new FormControl(null, { validators: [Validators.required] }),
      lng: new FormControl(null, { validators: [Validators.required] }),
    });
  }

  async onSubmit() {
    if (!this.form.valid) return;
    try {
      this.isSubmitted = true;
      // Buat objek source dengan nilai dari form
      const source = {
        sourceLat: this.form.value.lat,
        sourceLng: this.form.value.lng,
      };
      await this.tracker.updateSourceLocation(source);
      this.isSubmitted = false;
      this.openModal = false;
    } catch (e) {
      this.isSubmitted = false;
      console.log(e);
    }
  }

  updateDistanceAndDuration(distance: string, duration: string) {
    this.dataDokter[0].dummyJarak = `${distance}`;
    this.dataDokter[0].dummyDuration = `${duration}`;
  }

  ngOnInit() {}
}
