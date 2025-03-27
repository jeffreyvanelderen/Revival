import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedsApiComponent } from './dog-breeds-api.component';

describe('DogBreedsApiComponent', () => {
  let component: DogBreedsApiComponent;
  let fixture: ComponentFixture<DogBreedsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogBreedsApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogBreedsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
