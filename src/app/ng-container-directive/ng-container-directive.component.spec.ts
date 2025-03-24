import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerDirectiveComponent } from './ng-container-directive.component';

describe('NgContainerDirectiveComponent', () => {
  let component: NgContainerDirectiveComponent;
  let fixture: ComponentFixture<NgContainerDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainerDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
