import i18n from 'i18next';
import * as Localisation from 'expo-localization';
import { initReactI18next } from 'react-i18next';
import pt from './locales/pt.json';
import en from './locales/en.json';
import es from './locales/es.json';

const resources = {
    en: en,
    pt: pt,
    es: es,
  };

const currentLocale = Localisation.locale;

const getLocale = (): string => {
  let convertedLocale = 'en';
  if (currentLocale.startsWith('es')) convertedLocale = 'es';
  if (currentLocale.startsWith('en')) convertedLocale = 'en';
  if (currentLocale.startsWith('pt')) convertedLocale = 'pt';
  return convertedLocale;
};

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    lng: getLocale(),
    interpolation: { escapeValue: false }
  })

export default i18n; 