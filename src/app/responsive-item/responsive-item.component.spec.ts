import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveItemComponent } from './responsive-item.component';

describe('ResponsiveItemComponent', () => {
  let component: ResponsiveItemComponent;
  let fixture: ComponentFixture<ResponsiveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
