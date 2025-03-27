import { Component, Input } from '@angular/core';
import { ExternalBreed } from '../../models/external/dog-api/external-breed.model';
import { DogService } from '../../services/dog/dog.service';
import { MeasuringType, MeasuringTypeLengthUnit, MeasuringTypeWeightUnit } from '../../models/enums/internal/MeasuringType';

@Component({
  selector: 'app-dog-breed-api',
  imports: [],
  templateUrl: './dog-breed-api.component.html',
  styleUrl: './dog-breed-api.component.scss'
})
export class DogBreedApiComponent {

  // Expose to template
  MeasuringType = MeasuringType;
  // Expose to template
  MeasuringTypeLengthUnit = MeasuringTypeLengthUnit;
  // Expose to template
  MeasuringTypeWeightUnit = MeasuringTypeWeightUnit;


  dogBreedDetails?: ExternalBreed;

  measuringType: MeasuringType = MeasuringType.METRIC;

  constructor(private dogService: DogService) { }

  @Input()
  set id(value: string) {
    this.dogService.getBreed(+value)
      .subscribe(externalDogBreed => this.dogBreedDetails = externalDogBreed);
  }

  onPressSwitchMeasuringType() {
    if (this.measuringType === MeasuringType.IMPERIAL) {
      this.measuringType = MeasuringType.METRIC;
      return;
    }

    this.measuringType = MeasuringType.IMPERIAL;
  }

  getInMeasuringType<T>(object: {imperial: T, metric: T}): T {
    if (this.measuringType === MeasuringType.IMPERIAL) {
      return object.imperial;
    }

    return object.metric;
  }

}
