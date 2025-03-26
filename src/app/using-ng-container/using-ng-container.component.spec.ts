import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UsingNgContainerComponent} from './using-ng-container.component';

describe('UsingNgContainerComponent', () => {
  let component: UsingNgContainerComponent;
  let fixture: ComponentFixture<UsingNgContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingNgContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UsingNgContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
