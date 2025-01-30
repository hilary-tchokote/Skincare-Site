import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    es: { translation: es }
  },
  lng: 'en', // Langue par défaut
  fallbackLng: 'en', // Langue de secours si la traduction n'existe pas
  interpolation: {
    escapeValue: false // React s'occupe de l'échappement des valeurs
  }
});

export default i18n;
