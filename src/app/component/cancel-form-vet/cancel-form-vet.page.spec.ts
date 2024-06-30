import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CancelFormVetPage } from './cancel-form-vet.page';

describe('CancelFormVetPage', () => {
  let component: CancelFormVetPage;
  let fixture: ComponentFixture<CancelFormVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelFormVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
