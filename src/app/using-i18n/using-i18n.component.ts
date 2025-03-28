import { Component, computed, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-using-i18n',
  imports: [],
  templateUrl: './using-i18n.component.html',
  styleUrl: './using-i18n.component.scss'
})
export class UsingI18nComponent implements OnInit {

  isToggled = signal<boolean>(false);
  name = 'Jeffrey';

  toggleAriaLabel = computed(() => $localize`:Toggle Button|A button to toggle status:${this.isToggled() ? 'Show' : 'Hide'}`);

  logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png";

  constructor(){
    /*
    After you prepare a component for translation, use the extract-i18n Angular CLI command to extract the marked text in the component into a source language file.
    The marked text includes text marked with i18n, attributes marked with i18n-attribute, and text tagged with $localize.
    
    1. ng extract-i18n --format=json --out-file=translations.json --output-path=i18n
    */
  }

  ngOnInit(): void {
    // How to translate in a component
    console.log($localize`This should translate`);

    console.log($localize`:{i18n_metadata}:string to translate`);

    console.log($localize`:{i18n_metadata}:string to translate with some interpolation: ${this.name}`);
  }

  toggleDisplay() {
    this.isToggled.update(wasToggled => !wasToggled);
  }

}
