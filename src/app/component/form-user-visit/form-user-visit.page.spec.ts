import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormUserVisitPage } from './form-user-visit.page';

describe('FormUserVisitPage', () => {
  let component: FormUserVisitPage;
  let fixture: ComponentFixture<FormUserVisitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
