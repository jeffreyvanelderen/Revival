import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogBreedApiComponent } from './dog-breed-api.component';

describe('DogBreedApiComponent', () => {
  let component: DogBreedApiComponent;
  let fixture: ComponentFixture<DogBreedApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogBreedApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogBreedApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
