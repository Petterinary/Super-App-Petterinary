import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RincianProfilePage } from './rincian-profile.page';

describe('RincianProfilePage', () => {
  let component: RincianProfilePage;
  let fixture: ComponentFixture<RincianProfilePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RincianProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
