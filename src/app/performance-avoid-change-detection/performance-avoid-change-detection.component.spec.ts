import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceAvoidChangeDetectionComponent } from './performance-avoid-change-detection.component';

describe('PerformanceAvoidChangeDetectionComponent', () => {
  let component: PerformanceAvoidChangeDetectionComponent;
  let fixture: ComponentFixture<PerformanceAvoidChangeDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformanceAvoidChangeDetectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformanceAvoidChangeDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
