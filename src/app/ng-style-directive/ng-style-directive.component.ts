import {NgStyle} from '@angular/common';
import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-ng-style-directive',
  imports: [NgStyle],
  templateUrl: './ng-style-directive.component.html',
  styleUrl: './ng-style-directive.component.scss',
})
export class NgStyleDirectiveComponent {
  canSave = signal<boolean>(false);
  unchanged = signal<boolean>(true);
  isSpecial = signal<boolean>(false);

  currentStyles = computed<Record<string, string>>(() => ({
    'font-style': this.canSave() ? 'italic' : 'normal',
    'font-weight': this.unchanged() ? 'normal' : 'bold',
    'font-size': (this.isSpecial() ? '24' : '12') + 'px',
  }));
}
