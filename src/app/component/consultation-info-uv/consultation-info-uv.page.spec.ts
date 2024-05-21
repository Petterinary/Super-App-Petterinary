import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultationInfoUvPage } from './consultation-info-uv.page';

describe('ConsultationInfoUvPage', () => {
  let component: ConsultationInfoUvPage;
  let fixture: ComponentFixture<ConsultationInfoUvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationInfoUvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
