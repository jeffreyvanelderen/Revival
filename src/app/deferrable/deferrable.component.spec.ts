import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableComponent } from './deferrable.component';

describe('DeferrableComponent', () => {
  let component: DeferrableComponent;
  let fixture: ComponentFixture<DeferrableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferrableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
