// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// Importa los recursos de traducción
import enTranslations from './public/locales/en/common.json';
import esTranslations from './public/locales/es/common.json';

// Configura i18next
i18n
  .use(initReactI18next) // pasa la instancia de i18next a react-i18next
  .init({
    lng: 'en', // idioma por defecto
    fallbackLng: 'en', // idioma por defecto si el idioma deseado no está disponible
    resources: {
      en: { common: enTranslations },
      es: { common: esTranslations },
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false, // react ya maneja el escape
    },
  });

export default i18n;
