import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsingNgContentComponent} from './using-ng-content.component';

describe('UsingNgContentComponent', () => {
  let component: UsingNgContentComponent;
  let fixture: ComponentFixture<UsingNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingNgContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsingNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
