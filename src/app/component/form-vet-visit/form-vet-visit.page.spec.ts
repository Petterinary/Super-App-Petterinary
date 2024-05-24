import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormVetVisitPage } from './form-vet-visit.page';

describe('FormVetVisitPage', () => {
  let component: FormVetVisitPage;
  let fixture: ComponentFixture<FormVetVisitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVetVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
