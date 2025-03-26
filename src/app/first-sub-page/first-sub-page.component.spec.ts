import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSubPageComponent } from './first-sub-page.component';

describe('FirstSubPageComponent', () => {
  let component: FirstSubPageComponent;
  let fixture: ComponentFixture<FirstSubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstSubPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
