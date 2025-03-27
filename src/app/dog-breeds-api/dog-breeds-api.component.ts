import { Component } from '@angular/core';
import { DogService } from '../../services/dog/dog.service';
import { ExternalBreed } from '../../models/external/dog-api/external-breed.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog-breeds-api',
  imports: [],
  templateUrl: './dog-breeds-api.component.html',
  styleUrl: './dog-breeds-api.component.scss'
})
export class DogBreedsApiComponent {

  breeds: ExternalBreed[] = [];
  page = 0;
  limit = 10;

  constructor(private dogService: DogService, private router: Router) {
    this.fetchMoreBreeds();
  }

  fetchMoreBreeds() {
    this.dogService.getBreeds({page: this.page, limit: this.limit})
      .subscribe(value => {
        this.breeds.push(...value);
        this.page += 1;
    });
  }

  onPressBreed(id: number) {
    this.router.navigate([`/dogs/${id}`]);
  }

}
