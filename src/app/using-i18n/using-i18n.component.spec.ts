import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingI18nComponent } from './using-i18n.component';

describe('UsingI18nComponent', () => {
  let component: UsingI18nComponent;
  let fixture: ComponentFixture<UsingI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingI18nComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
