import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import enTranslation from './en/translation.json';
import frTranslation from './fr/translation.json';
import ptTranslation from './pt/translation.json';
import jaTranslation from './ja/translation.json';
import zhTranslation from './zh/translation.json';
import arTranslation from './ar/translation.json';

// Initialize i18next
i18n
  .use(initReactI18next) // Pass the i18n instance to react-i18next.
  .init({
    resources: {
      en: { translation: enTranslation },
      fr: { translation: frTranslation },
      pt: { translation: ptTranslation },
      ja: { translation: jaTranslation },
      zh: { translation: zhTranslation },
      ar: { translation: arTranslation },
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Use English if the chosen language is not available
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
