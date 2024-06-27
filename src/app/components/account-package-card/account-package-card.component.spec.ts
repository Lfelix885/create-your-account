import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPackageCardComponent } from './account-package-card.component';

describe('AccountPackageCardComponent', () => {
  let component: AccountPackageCardComponent;
  let fixture: ComponentFixture<AccountPackageCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountPackageCardComponent]
    });
    fixture = TestBed.createComponent(AccountPackageCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
