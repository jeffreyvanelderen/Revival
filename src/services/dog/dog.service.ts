import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ExternalBreedsResponse} from '../../models/external/dog-api/external-breeds-response';
import {Observable} from 'rxjs';
import {ExternalBreed} from '../../models/external/dog-api/external-breed.model';

/*
  https://documenter.getpostman.com/view/5578104/2s935hRnak#92d40208-b311-405b-92a4-d37b9c5fcb2a
*/
@Injectable({
  providedIn: 'root',
})
export class DogService {
  baseURL = 'https://api.thedogapi.com';
  breedsEndpoint = 'v1/breeds';

  constructor(private http: HttpClient) {}

  getBreeds(
    params: {limit?: number; page?: number} = {limit: 10, page: 0},
  ): Observable<ExternalBreedsResponse> {
    return this.http.get<ExternalBreedsResponse>(
      `${this.baseURL}/${this.breedsEndpoint}`,
      {
        headers: this.getHeaders(),
        params,
      },
    );
  }

  getBreed(id: number): Observable<ExternalBreed> {
    return this.http.get<ExternalBreed>(
      `${this.baseURL}/${this.breedsEndpoint}/${id}`,
      {
        headers: this.getHeaders(),
      },
    );
  }

  private getHeaders() {
    /* 
    Using: https://www.npmjs.com/package/@ngx-env/builder#quick-start 
    for injecting sensitive env variables!
    */
    return {
      'x-api-key': import.meta.env['NG_APP_DOG_API_KEY'],
      'Content-Type': 'application/json',
    };
  }
}
