import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageWithNestedRoutesComponent} from './page-with-nested-routes.component';

describe('PageWithNestedRoutesComponent', () => {
  let component: PageWithNestedRoutesComponent;
  let fixture: ComponentFixture<PageWithNestedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageWithNestedRoutesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageWithNestedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
