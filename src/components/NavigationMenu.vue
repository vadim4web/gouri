<template>
  <nav class="navigation-mobile">
    <menu class="navigation-mobile-menu">
      <li class="navigation-mobile-menu-item"><a href="#services" @click="delayedClose()">{{ $t('services') }}</a></li>
      <li class="navigation-mobile-menu-item"><a href="#about-us" @click="delayedClose()">{{ $t('aboutUs') }}</a></li>
      <li class="navigation-mobile-menu-item"><a href="#contact-us" @click="delayedClose()">{{ $t('contactUs') }}</a></li>
    </menu>

    <language-select />

    <call-button @click="closeMenu()" />

    <img src="/images/symbol.webp" alt="company spirit incapsulated in an image" class="navigation-mobile-image">

    <div class="nav-footer">
      {{ $t('copyright') }} &copy; 2018 - {{ new Date().getFullYear() }} {{ currentURL || 'gouri.com.pl' }}
    </div>
  </nav>
</template>

<script setup>
import LanguageSelect from './LanguageSelect.vue'
import CallButton from './CallButton.vue'
import { computed } from 'vue'

const currentURL = computed(() => window.location.href.split('/').filter(url => url)[1])

const { closeMenu } = defineProps({ closeMenu: { type: Function } })

const delayedClose = () => setTimeout(() => closeMenu(), 333)
</script>

<style lang="scss">
.navigation-mobile {
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(100dvh - 5rem);
  width: 100%;
  overflow: hidden;
  transform: translateY(calc(100vh - 5rem));
  background: white;
  display: grid;
  grid-template-rows: 5fr 2fr 2fr 3fr 3fr;
  align-content: center;
  justify-items: center;
}

.navigation-mobile-image {
  transform: scale(0.66) translate(-1rem, -5svh);
  margin-bottom: -10%;
  filter: drop-shadow(0 0 1rem var(--color));
  margin: -2.5rem;
}

.navigation-mobile-menu {
  width: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;

  &-item {
    padding: 1rem;
    min-width: fit-content;
  }
}

.nav-footer {
  background: var(--color-footer);
  width: 100%;
  height: 100%;
  position: relative;
  color: white;
  font-weight: 500;

  display: flex;
  align-items: center;
  justify-content: center;
}

[href^="#"] {
  text-transform: uppercase;
}
</style>