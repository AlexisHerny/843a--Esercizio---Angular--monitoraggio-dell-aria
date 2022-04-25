import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherAComponent } from './weather-a.component';

describe('WeatherAComponent', () => {
  let component: WeatherAComponent;
  let fixture: ComponentFixture<WeatherAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
