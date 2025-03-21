import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFragmentComponent } from './template-fragment.component';

describe('TemplateFragmentComponent', () => {
  let component: TemplateFragmentComponent;
  let fixture: ComponentFixture<TemplateFragmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateFragmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
