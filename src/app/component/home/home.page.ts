import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorDataService } from '../service/data/doctor.data.serivce';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DistanceService } from 'src/app/services/distance/distance.service';
import { AuthService } from '../service/auth.service';

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
  private userLocation: { lat: number; lng: number };

  constructor(
    private router: Router,
    private authService: AuthService,
    private doctorDataSerivice: DoctorDataService,
    private distanceService: DistanceService,
    private geolocation: Geolocation
  ) {}

  async getDoctor() {
    this.doctorDataSerivice.getAllDoctors().subscribe((res) => {
      this.doctors = res.map((doctor) => ({
        ...doctor,
        lat: parseFloat(doctor.lat),
        lng: parseFloat(doctor.lng),
      }));
      this.calculateDistances();
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

  async getCurrentLocation() {
    try {
      const position = await this.geolocation.getCurrentPosition();
      this.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    } catch (error) {
      console.error('Error getting user location:', error);
    }
  }

  async calculateDistances() {
    for (let doctor of this.doctors) {
      if (doctor.lat && doctor.lng) {
        try {
          const result = await this.distanceService.calculateDistance(
            { lat: this.userLocation.lat, lng: this.userLocation.lng },
            { lat: parseFloat(doctor.lat), lng: parseFloat(doctor.lng) }
          );
          doctor.distance = result.distance;
        } catch (error) {
          console.error('Error calculating distance:', error);
          doctor.distance = null;
        }
      }
    }

    this.doctors = this.doctors
      .filter(
        (doctor) => doctor.distance && this.parseDistance(doctor.distance) < 10
      )
      .sort(
        (a, b) =>
          this.parseDistance(a.distance) - this.parseDistance(b.distance)
      );
  }

  parseDistance(distance: string): number {
    const value = parseFloat(distance.replace(' km', ''));
    return isNaN(value) ? Infinity : value;
  }

  public async toServiceSelect(idVet: number) {
    this.router.navigate([`/service-selection/${idVet}`], {});
  }

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    await this.getCurrentLocation();
    this.getDoctor();
  }
}
