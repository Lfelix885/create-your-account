import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithoutAccountComponent } from './without-account.component';

describe('WithoutAccountComponent', () => {
  let component: WithoutAccountComponent;
  let fixture: ComponentFixture<WithoutAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WithoutAccountComponent]
    });
    fixture = TestBed.createComponent(WithoutAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
