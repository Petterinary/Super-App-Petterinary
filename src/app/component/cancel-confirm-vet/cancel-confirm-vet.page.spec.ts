import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelConfirmVetPage } from './cancel-confirm-vet.page';

describe('CancelConfirmVetPage', () => {
  let component: CancelConfirmVetPage;
  let fixture: ComponentFixture<CancelConfirmVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelConfirmVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
