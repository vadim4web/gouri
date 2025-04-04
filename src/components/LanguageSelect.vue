<template>
  <div class="language-select">
    <a role="button" :class="locale == 'uk' ? 'selected' : ''" @click="setLocale('uk')">UK</a>
    <span style="color: #80808080;">|</span>
    <a role="button" :class="locale == 'ru' ? 'selected' : ''" @click="setLocale('ru')">RU</a>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const setLocale = (lang) => locale.value = lang
</script>

<style lang="scss" scoped>
.language-select {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.25rem;
  padding: 1rem;
  width: 100%;

  :not(.selected) {
    color: #808080;
  }

  a:hover {
    color: var(--color);
  }
}
</style>