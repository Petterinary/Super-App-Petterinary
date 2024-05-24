import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationInfoVvPage } from './consultation-info-vv.page';

describe('ConsultationInfoVvPage', () => {
  let component: ConsultationInfoVvPage;
  let fixture: ComponentFixture<ConsultationInfoVvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationInfoVvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
