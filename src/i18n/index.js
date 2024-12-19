import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    hello: 'Hello',
    welcome: 'Welcome to my blog',
    about: 'About Me',
    language: 'Language',
    home: 'Home',
  },
  ru: {
    hello: 'Привет',
    welcome: 'Добро пожаловать в мой блог',
    about: 'Обо мне',
    language: 'Язык',
    home: 'Главная',
  },
};

const i18n = createI18n({
  locale: 'en', // Язык по умолчанию
  messages, // Сообщения для переводов
});

export default i18n;
