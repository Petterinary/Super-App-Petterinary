import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UvLiveTrackingPage } from './uv-live-tracking.page';

describe('UvLiveTrackingPage', () => {
  let component: UvLiveTrackingPage;
  let fixture: ComponentFixture<UvLiveTrackingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UvLiveTrackingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
