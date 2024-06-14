import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDataService } from '../service/data/doctor.data.serivce';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public doctors: any;

  constructor(
    private router: Router,
    private doctorDataSerivice: DoctorDataService
  ) {}

  getDoctor() {
    this.doctorDataSerivice.getAllDoctors().subscribe((res) => {
      this.doctors = res;
    });
  }

  public async toServiceSelect(idVet: number) {
    this.router.navigate([`/service-selection/${idVet}`], {});
  }

  ngOnInit() {
    this.getDoctor();
  }
}
