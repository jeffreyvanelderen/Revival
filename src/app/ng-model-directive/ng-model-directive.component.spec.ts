import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModelDirectiveComponent } from './ng-model-directive.component';

describe('NgModelDirectiveComponent', () => {
  let component: NgModelDirectiveComponent;
  let fixture: ComponentFixture<NgModelDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgModelDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgModelDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
