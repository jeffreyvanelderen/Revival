import { Component, OnInit } from '@angular/core';
import { translateSignal, TranslocoDirective, TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { Language } from '../../models/enums/internal/language.enum';

@Component({
  selector: 'app-using-transloco',
  imports: [TranslocoDirective, TranslocoPipe],
  templateUrl: './using-transloco.component.html',
  styleUrl: './using-transloco.component.scss'
})
export class UsingTranslocoComponent implements OnInit {

  // Expose to template
  Language = Language;


  // Translate in component using signal
  textVar = translateSignal('helloX', { x: 'Via translateSignal()' });

  /**
   * Translate a given key, allowing optional parameters for dynamic values or language specification. 
   * Use this method when you need to translate keys directly in components or services.
   */
  constructor(private translocoService: TranslocoService) {
    // Retrieve current ACTIVE language
    console.log(`Current active language=${translocoService.getActiveLang()}`);

    // Retrieve default language
    console.log(`Default language=${translocoService.getDefaultLang()}`);
    
    // Set default language
    // translocoService.setDefaultLang(Language.EN);

    // Set current ACTIVE language
    // translocoService.setActiveLang(Language.EN);

    // Listen for language changes and act
    translocoService.langChanges$.subscribe(lang => {
      console.log(`Language changed to: ${lang}`);
    });
  }

  ngOnInit(): void {

    // Returns an observable that emits translations. It loads the required translation file automatically!
    this.translocoService
      // Observable
      .selectTranslate('helloX', { x: 'Via injector, automatically loading the translation files' })
      .subscribe(value => console.log(`t value = ${value}`));


    // Make sure the translation files are loaded when calling translate()
    this.translocoService.translate('helloX', { x: 'Via injector' });
  }
}
