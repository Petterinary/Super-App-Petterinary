import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RekapKonsultasiVvPage } from './rekap-konsultasi-vv.page';

describe('RekapKonsultasiVvPage', () => {
  let component: RekapKonsultasiVvPage;
  let fixture: ComponentFixture<RekapKonsultasiVvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapKonsultasiVvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
