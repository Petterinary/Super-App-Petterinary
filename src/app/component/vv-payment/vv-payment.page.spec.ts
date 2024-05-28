import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VvPaymentPage } from './vv-payment.page';

describe('VvPaymentPage', () => {
  let component: VvPaymentPage;
  let fixture: ComponentFixture<VvPaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VvPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
