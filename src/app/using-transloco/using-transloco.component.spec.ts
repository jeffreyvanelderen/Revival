import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingTranslocoComponent } from './using-transloco.component';

describe('UsingTranslocoComponent', () => {
  let component: UsingTranslocoComponent;
  let fixture: ComponentFixture<UsingTranslocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingTranslocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingTranslocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
