import {Component} from '@angular/core';
import {StorageService} from '../../services/storage/storage.service';
import {Router} from '@angular/router';
import {StorageKey} from '../../models/enums/internal/StorageKey';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  doMockLogout() {
    this.storageService.storage.removeItem(StorageKey.TOKEN);

    // Navigate to base
    this.router.navigate(['/']);
  }
}
