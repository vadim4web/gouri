<template>
  <nav class="navigation-mobile">
    <menu class="navigation-mobile-menu">
      <li class="navigation-mobile-menu-item"><a href="#services">{{ $t('services') }}</a></li>
      <li class="navigation-mobile-menu-item"><a href="#about-us">{{ $t('aboutUs') }}</a></li>
      <li class="navigation-mobile-menu-item"><a href="#contact-us">{{ $t('contactUs') }}</a></li>
    </menu>

    <language-select />

    <call-button />

    <symbolic-image style="transform: scale(0.66) translateY(-10svh);" />

    <div class="nav-footer">
      {{ $t('copyright') }} &copy; 2018 - {{ new Date().getFullYear() }} GOURI Agency
    </div>
  </nav>
</template>

<script setup>
import LanguageSelect from './LanguageSelect.vue'
import CallButton from './CallButton.vue'
import SymbolicImage from './SymbolicImage.vue'
</script>

<style lang="scss" scoped>
.navigation-mobile {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(100svh - 4.25rem);
  width: 100%;
  overflow: hidden;
  transform: translateY(100%);
  background: white;
  display: grid;
  grid-template-rows: 6fr 2fr 3fr 3fr 3fr;
  align-content: center;
  justify-items: center;
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
  background: var(--color-dimmed);
  width: 100%;
  height: 15svh;
  position: relative;
  bottom: -0.25rem;
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