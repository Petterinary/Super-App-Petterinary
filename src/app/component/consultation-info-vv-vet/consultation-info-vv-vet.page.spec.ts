import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationInfoVvVetPage } from './consultation-info-vv-vet.page';

describe('ConsultationInfoVvVetPage', () => {
  let component: ConsultationInfoVvVetPage;
  let fixture: ComponentFixture<ConsultationInfoVvVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationInfoVvVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
