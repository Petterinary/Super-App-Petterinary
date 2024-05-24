import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPagePaymentPage } from './confirmation-page-payment.page';

describe('ConfirmationPagePaymentPage', () => {
  let component: ConfirmationPagePaymentPage;
  let fixture: ComponentFixture<ConfirmationPagePaymentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPagePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
