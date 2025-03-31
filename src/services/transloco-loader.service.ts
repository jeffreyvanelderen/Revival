import { inject, Injectable } from '@angular/core';
import { Translation, TranslocoLoader } from '@jsverse/transloco';
import { HttpClient } from '@angular/common/http';
import { Language } from '../models/enums/internal/language.enum';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {

    constructor(private http: HttpClient) { }

    getTranslation(lang: Language) {
        return this.http.get<Translation>(`assets/i18n/${lang}.json`);
    }
}