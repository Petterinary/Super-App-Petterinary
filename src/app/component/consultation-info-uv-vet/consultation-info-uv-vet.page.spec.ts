import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationInfoUvVetPage } from './consultation-info-uv-vet.page';

describe('ConsultationInfoUvVetPage', () => {
  let component: ConsultationInfoUvVetPage;
  let fixture: ComponentFixture<ConsultationInfoUvVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationInfoUvVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
