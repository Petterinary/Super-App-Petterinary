import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VvLiveTrackingVetPage } from './vv-live-tracking-vet.page';

describe('VvLiveTrackingVetPage', () => {
  let component: VvLiveTrackingVetPage;
  let fixture: ComponentFixture<VvLiveTrackingVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VvLiveTrackingVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
