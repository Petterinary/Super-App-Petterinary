import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeVetPage } from './home-vet.page';

describe('HomeVetPage', () => {
  let component: HomeVetPage;
  let fixture: ComponentFixture<HomeVetPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
