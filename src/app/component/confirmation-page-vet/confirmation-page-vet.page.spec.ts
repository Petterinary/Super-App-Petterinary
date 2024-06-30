import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPageVetPage } from './confirmation-page-vet.page';

describe('ConfirmationPageVetPage', () => {
  let component: ConfirmationPageVetPage;
  let fixture: ComponentFixture<ConfirmationPageVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationPageVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
