import { copyFileSync } from "node:fs";
import { Language } from "../src/models/enums/internal/language.enum";
import { resolve } from "node:path";

Object.values(Language).forEach(language => {
    const fileName = `${language}.json`;
    copyFileSync(
        resolve(__dirname, `../src/assets/i18n/${fileName}`),
        resolve(`public/assets/i18n/${fileName}`)
    );

    console.log(`Copied '${fileName}'`);
});

console.log(`✅ Translation files succesfully copied to /public/i18n`);