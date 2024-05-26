import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RekapKonsultasiUvPage } from './rekap-konsultasi-uv.page';

describe('RekapKonsultasiUvPage', () => {
  let component: RekapKonsultasiUvPage;
  let fixture: ComponentFixture<RekapKonsultasiUvPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RekapKonsultasiUvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
