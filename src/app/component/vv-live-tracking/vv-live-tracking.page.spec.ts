import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VvLiveTrackingPage } from './vv-live-tracking.page';

describe('VvLiveTrackingPage', () => {
  let component: VvLiveTrackingPage;
  let fixture: ComponentFixture<VvLiveTrackingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VvLiveTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
