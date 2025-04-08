import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
  Theme,
} from './ng-container-directive/ng-container-directive.component';
import {StorageService} from '../services/storage/storage.service';

@Component({
  selector: 'app-root',
  imports: [
    /* These 3 imports are needed for routing! */
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [Theme], // Nodig om de directive bloot te stellen aan zijn child items!
})
export class AppComponent {
  title = 'Revival';

  someName = 'Jeffrey';
  someLastName = 'Vanelderen';

  constructor(private storageService: StorageService) {
    this.storageService.set('test', 'val');
    console.log(`test`, this.storageService.get('test'));
  }

  onReceiveDidSubmitEvent(event: string) {
    alert('Parent received event from child: ' + event);
  }
}
