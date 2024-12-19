<template>
    <div>
      <label>{{ $t('language') }}:</label>
      <select @change="changeLanguage" v-model="currentLanguage">
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  </template>
  
  <script>
  import { useI18n } from 'vue-i18n';
  
  export default {
    setup() {
      const { locale } = useI18n();
  
      const changeLanguage = (event) => {
        locale.value = event.target.value; // Меняем язык
      };
  
      return {
        currentLanguage: locale.value,
        changeLanguage,
      };
    },
  };
  </script>
  