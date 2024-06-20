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

  // async ngOnInit() {

  //   this.getDoctor();
  // }

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
        }
      }
    }

    // Sort doctors by distance
    this.doctors.sort((a, b) => {
      if (!a.distance) return 1; // Push doctors without distance to the end
      if (!b.distance) return -1; // Push doctors without distance to the end
      return a.distance.localeCompare(b.distance); // Assuming distance is a string
    });
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
