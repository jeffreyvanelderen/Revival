import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesInTemplatesComponent } from './variables-in-templates.component';

describe('VariablesInTemplatesComponent', () => {
  let component: VariablesInTemplatesComponent;
  let fixture: ComponentFixture<VariablesInTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesInTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablesInTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
