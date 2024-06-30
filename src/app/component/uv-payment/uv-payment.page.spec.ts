import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UvPaymentPage } from './uv-payment.page';

describe('UvPaymentPage', () => {
  let component: UvPaymentPage;
  let fixture: ComponentFixture<UvPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UvPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
