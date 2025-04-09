<template>
  <section class="hero pocket">
    <header-block v-if="width >= height" />
    <menu-block v-else />

    <div class="container">
      <div class="content">
        <h1 class="hero-headline">
          <span class="part1">
            {{ $t('hero_headline1') }}
          </span>
          <br>
          <span class="part2">
            {{ $t('hero_headline2') }}
          </span>
        </h1>
        <p>
          {{ $t('hero_moto') }}
        </p>
        <email-form />
      </div>

      <img src="/images/symbol.png" alt="" class="hero-image">
    </div>
  </section>
</template>

<script setup>
import HeaderBlock from './HeaderBlock.vue'
import MenuBlock from './MenuBlock.vue'
import EmailForm from './EmailForm.vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<style lang="scss">
.hero {
  background: linear-gradient(180deg, #fff, var(--color-red-gray));
  height: 90dvh;
}

.hero-image {
  filter: drop-shadow(0 0 1rem var(--color));
  height: calc(8vh + 25rem);
  aspect-ratio: 558 / 706;
  object-fit: contain;
  position: absolute;

  @media (orientation: landscape) {
    right: 4rem;
  }

  @media (orientation: portrait) {
    bottom: 0;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 63vw;

  padding: 0 1rem;

  overflow-x: hidden;

  @media (orientation: landscape) {
    height: calc(90dvh - 5rem);
    padding: 0 0 0 7.5rem;
  }


  @media (orientation: portrait) {
    height: calc(90dvh - 15rem);
    flex-direction: column;
    width: 25rem;
    margin: 0 auto;
  }

  .content {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    max-width: 100vw;
    overflow-x: hidden;

    @media (orientation: portrait) {
      gap: 2.5rem;
    }

    h1 {
      font-family: 'Unbounded';
      font-weight: 400;
      font-size: 2.5rem;

      .part1 {
        color: var(--color);
      }
    }
  }
}

</style>