import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbillingComponent } from './customerbilling.component';

describe('CustomerbillingComponent', () => {
  let component: CustomerbillingComponent;
  let fixture: ComponentFixture<CustomerbillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerbillingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
