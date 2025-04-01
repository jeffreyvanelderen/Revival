import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleProgressbarComponent } from './accessible-progressbar.component';

describe('AccessibleProgressbarComponent', () => {
  let component: AccessibleProgressbarComponent;
  let fixture: ComponentFixture<AccessibleProgressbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleProgressbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
