<template>
  <section class="testemonials-section">
    <h2 class="testemonials-heading">
      <span class="part1">
        {{ $t('testemonials_header') }}
      </span>
      <br>
      <span class="part2">
        {{ $t('testemonials_header_') }}
      </span>
      <wbr />
      <span class="part3">
        {{ $t('testemonials_header__') }}
      </span>
    </h2>

    <testemonials-slider />
  </section>
</template>

<script setup>
import TestemonialsSlider from './TestemonialsSlider.vue'
</script>

<style lang="scss" scoped>
.testemonials-section {
  background: var(--color-dimmed);
  position: relative;
  transform: scaleY(1.12) translateY(-2.5rem);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (orientation: landscape) {
    padding: 12.5rem 1.5rem 7.5rem 20rem;
  }

  @media (orientation: portrait) {
    padding: 10rem 1rem 5rem;
  }

  .testemonials-heading {
    text-align: left;
    text-transform: uppercase;
    font-family: 'Unbounded';
    text-shadow: 0 0.5rem 0.5rem var(--color-coal);

    .part2 {
      color: var(--color-grey);
    }

    .part1,
    .part3 {
      color: var(--color-dimmed);
    }

    @media (orientation: landscape) {
      font-size: 4rem;
    }

    @media (orientation: portrait) {
      font-size: 3rem;
    }
  }
}
</style>