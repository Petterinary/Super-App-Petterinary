import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  OnDestroy,
  Input,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GmapService } from 'src/app/services/gmap/gmap.service';
import { TrackerService } from 'src/app/services/tracker/tracker.service';
import { GeolocationService } from '../../service/live-location.service';
import { AuthService } from '../../service/auth.service';
import { LiveTrackingDataService } from '../../service/data/live-tracking.data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map', { static: true }) mapElementRef: ElementRef;
  @Input() consulStage: any;

  public googleMaps: any;
  public source: any = {};
  public dest: any = {};
  public map: any;
  public directionsService: any;
  public directionsDisplay: any;
  public source_marker: any;
  public destination_marker: any;

  private subscriptions: Subscription = new Subscription();
  private timeoutHandle: any;

  private userData: any;
  private isDoctorTrack: boolean;
  private isUserTrack: boolean;
  private liveTracking: any;

  constructor(
    private tracker: TrackerService,
    private maps: GmapService,
    private renderer: Renderer2,
    private authService: AuthService,
    private liveTrackingDataService: LiveTrackingDataService,
    private geolocationService: GeolocationService
  ) {}

  async ngOnInit() {
    this.userData = await this.authService.getUserData();
    if (this.consulStage[0].visitType === 1) {
      this.isUserTrack = true;
      this.isDoctorTrack = false;
    } else {
      this.isUserTrack = false;
      this.isDoctorTrack = true;
    }
    this.getLatLng();
  }

  getLatLng() {
    if (this.isUserTrack) {
      const trackUserSub = this.liveTrackingDataService
        .getLiveTrackUser(this.consulStage[0].consultationId)
        .subscribe({
          next: (data) => {
            this.liveTracking = data;
            this.tracking();
            this.resetTimeout();
          },
        });
      this.subscriptions.add(trackUserSub);

      if (this.userData.userType === '1') {
        console.log('user');
        const geolocationSub = this.geolocationService.watchPosition(
          async (position) => {
            if (this.liveTracking?.liveTrackingId) {
              try {
                if (position) {
                  await this.update(this.liveTracking.liveTrackingId, position);
                }
              } catch (e) {
                console.error('Error updating live tracking:', e);
              }
            }
          }
        );
        this.subscriptions.add(geolocationSub);
      }
    }

    if (this.isDoctorTrack) {
      const trackDoctorSub = this.liveTrackingDataService
        .getLiveTrackDoctor(this.consulStage[0].consultationId)
        .subscribe({
          next: (data) => {
            this.liveTracking = data;
            this.tracking();
            this.resetTimeout();
          },
        });
      this.subscriptions.add(trackDoctorSub);

      if (this.userData.userType === '2') {
        console.log('doctor');
        const geolocationSub = this.geolocationService.watchPosition(
          async (position) => {
            if (this.liveTracking?.liveTrackingId) {
              try {
                if (position) {
                  await this.update(this.liveTracking.liveTrackingId, position);
                }
              } catch (e) {
                console.error('Error updating live tracking:', e);
              }
            }
          }
        );
        this.subscriptions.add(geolocationSub);
      }
    }
  }

  resetTimeout() {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
    this.timeoutHandle = setTimeout(() => {
      this.refreshData();
    }, 5000);
  }

  tracking() {
    if (this.isUserTrack) {
      this.source = {
        lat: this.liveTracking?.userLat,
        lng: this.liveTracking?.userLng,
      };
      if (!this.dest?.lat) {
        this.dest = {
          lat: this.liveTracking?.doctorLat,
          lng: this.liveTracking?.doctorLng,
        };
        this.loadMap();
      } else {
        this.changeMarkerPosition(this.source);
      }
    }

    if (this.isDoctorTrack) {
      this.source = {
        lat: this.liveTracking?.doctorLat,
        lng: this.liveTracking?.doctorLng,
      };
      if (!this.dest?.lat) {
        this.dest = {
          lat: this.liveTracking?.userLat,
          lng: this.liveTracking?.userLng,
        };
        this.loadMap();
      } else {
        this.changeMarkerPosition(this.source);
      }
    }
  }

  update(id: number, data: any) {
    const locationData = {
      lat: data.lat,
      lng: data.lng,
    };
    this.liveTrackingDataService.updateLiveTrack(id, locationData).subscribe(
      async () => {
        await console.log('update success');
      },
      async (_) => {
        await console.log('update fail');
      }
    );
  }

  refreshData() {
    this.getLatLng();
  }

  changeMarkerPosition(data) {
    const newPosition = { lat: data.lat, lng: data.lng };
    if (newPosition) {
      this.source_marker.setPosition(newPosition);
      this.map.panTo(newPosition);
      this.drawRoute();
    }
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.maps.loadGoogleMaps();
      const mapEl = this.mapElementRef.nativeElement;
      this.map = new googleMaps.Map(mapEl, {
        center: { lat: this.source.lat, lng: this.source.lng },
        disableDefaultUI: true,
        zoom: 13,
      });
      this.directionsService = new googleMaps.DirectionsService();
      this.directionsDisplay = new googleMaps.DirectionsRenderer();

      const sourceIconUrl = 'assets/icon/loc-red.png';
      const destinationIconUrl = 'assets/icon/loc-gold.png';

      const source_position = new googleMaps.LatLng(
        this.source.lat,
        this.source.lng
      );
      const destination_position = new googleMaps.LatLng(
        this.dest.lat,
        this.dest.lng
      );

      const source_icon = {
        url: sourceIconUrl,
        scaledSize: new googleMaps.Size(40, 40),
        origin: new googleMaps.Point(0, 0),
        anchor: new googleMaps.Point(10, 10),
      };
      const destination_icon = {
        url: destinationIconUrl,
        scaledSize: new googleMaps.Size(40, 40),
        origin: new googleMaps.Point(0, 0),
        anchor: new googleMaps.Point(10, 10),
      };

      this.source_marker = new googleMaps.Marker({
        map: this.map,
        position: source_position,
        animation: googleMaps.Animation.DROP,
        icon: source_icon,
      });

      this.destination_marker = new googleMaps.Marker({
        map: this.map,
        position: destination_position,
        animation: googleMaps.Animation.DROP,
        icon: destination_icon,
      });

      this.source_marker.setMap(this.map);
      this.destination_marker.setMap(this.map);

      this.directionsDisplay.setMap(this.map);
      this.directionsDisplay.setOptions({
        polylineOptions: {
          strokeWeight: 4,
          strokeOpacity: 1,
          strokeColor: 'black',
        },
        suppressMarkers: true,
      });

      await this.drawRoute();

      this.map.setCenter(destination_position);
      this.renderer.addClass(mapEl, 'visible');
    } catch (e) {
      console.log(e);
    }
  }

  drawRoute() {
    this.directionsService.route(
      {
        origin: this.source,
        destination: this.dest,
        travelMode: 'DRIVING',
        provideRouteAlternatives: true,
      },
      (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
          const directionsData = response.routes[0].legs[0];
          const distance = directionsData.distance.text;
          const duration = directionsData.duration.text;
        } else {
          console.log(status);
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
    this.subscriptions.unsubscribe();
  }
}
