import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibleComponent } from './accessible.component';

describe('AccessibleComponent', () => {
  let component: AccessibleComponent;
  let fixture: ComponentFixture<AccessibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
