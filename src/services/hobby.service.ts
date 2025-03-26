import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HobbyService {
  getHobbies() {
    return ['Driving motorcycles', 'Walking the dog', 'Fitness'];
  }
}
