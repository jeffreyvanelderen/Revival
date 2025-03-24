import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-using-ng-container',
  imports: [CommonModule],
  templateUrl: './using-ng-container.component.html',
  styleUrl: './using-ng-container.component.scss'
})
export class UsingNgContainerComponent {
  isAdmin = signal<boolean>(new Date().valueOf() % 2 === 0);
  someOtherComponent = computed(() => this.isAdmin() ? AdminProfile : BaseProfile);

  items = [{title: 'Title 1', description: 'Description 1'}, {title: 'Title 2', description: 'Description 2'}]
}

@Component({
  selector: 'app-admin-profile',
  imports: [],
  template: '<p>Admin profile</p>',
})
export class AdminProfile { }

@Component({
  selector: 'app-base-profile',
  imports: [],
  template: '<p>Base profile</p>',
})
export class BaseProfile { }