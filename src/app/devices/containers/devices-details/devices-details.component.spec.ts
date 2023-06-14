import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesDetailsComponent } from './devices-details.component';

describe('DevicesDetailsComponent', () => {
  let component: DevicesDetailsComponent;
  let fixture: ComponentFixture<DevicesDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevicesDetailsComponent]
    });
    fixture = TestBed.createComponent(DevicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
