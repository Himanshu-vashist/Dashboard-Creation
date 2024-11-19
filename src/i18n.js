import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      dashboard: "Dashboard",
      sales_overview: "Sales Overview",
      revenue_updates: "Revenue Updates",
      active_users: "Active Users",
      change_language: "Change Language"
    }
  },
  es: {
    translation: {
      dashboard: "Tablero",
      sales_overview: "Resumen de Ventas",
      revenue_updates: "Actualizaciones de Ingresos",
      active_users: "Usuarios Activos",
      change_language: "Cambiar Idioma"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
