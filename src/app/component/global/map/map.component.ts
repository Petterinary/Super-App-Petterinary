import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GmapService } from 'src/app/services/gmap/gmap.service';
import { TrackerService } from 'src/app/services/tracker/tracker.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  @ViewChild('map', { static: true }) mapElementRef: ElementRef;
  @Output() updateDistanceAndDuration = new EventEmitter<{
    distance: string;
    duration: string;
  }>();

  googleMaps: any;
  // source: any = {};
  // dest: any = {};
  source: any = {};
  dest: any = {};
  map: any;
  directionsService: any;
  directionsDisplay: any;
  source_marker: any;
  destination_marker: any;
  trackSub: Subscription;

  constructor(
    private tracker: TrackerService,
    private maps: GmapService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.trackSub = this.tracker.getLocation().subscribe({
      next: (data) => {
        this.source = { lat: data.sourceLat, lng: data.sourceLng };
        if (!this.dest?.lat) {
          this.dest = { lat: data.destLat, lng: data.destLng };
          this.loadMap();
        } else {
          // update marker & route
          this.changeMarkerPosition(this.source);
        }
      },
    });
  }

  changeMarkerPosition(data) {
    const newPosition = { lat: data?.lat, lng: data?.lng }; // Set the new marker position coordinates
    this.source_marker.setPosition(newPosition);
    this.map.panTo(newPosition); // Pan the map to the new marker position
    // this.drawRoute();
  }

  ngAfterViewInit() {
    this.loadMap();
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

          this.updateDistanceAndDuration.emit({ distance, duration });
        } else {
          console.log(status);
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.trackSub) this.trackSub.unsubscribe();
  }
}
