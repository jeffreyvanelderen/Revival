import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesUsingI18nComponent } from './pipes-using-i18n.component';

describe('PipesUsingI18nComponent', () => {
  let component: PipesUsingI18nComponent;
  let fixture: ComponentFixture<PipesUsingI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesUsingI18nComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipesUsingI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
