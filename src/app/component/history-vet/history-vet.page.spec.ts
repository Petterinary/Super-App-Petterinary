import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryVetPage } from './history-vet.page';

describe('HistoryVetPage', () => {
  let component: HistoryVetPage;
  let fixture: ComponentFixture<HistoryVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
