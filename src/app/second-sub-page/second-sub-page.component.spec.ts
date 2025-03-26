import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSubPageComponent } from './second-sub-page.component';

describe('SecondSubPageComponent', () => {
  let component: SecondSubPageComponent;
  let fixture: ComponentFixture<SecondSubPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondSubPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondSubPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
