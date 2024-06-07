import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UvLiveTrackingVetPage } from './uv-live-tracking-vet.page';

describe('UvLiveTrackingVetPage', () => {
  let component: UvLiveTrackingVetPage;
  let fixture: ComponentFixture<UvLiveTrackingVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UvLiveTrackingVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
