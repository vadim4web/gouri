<template>
  <section class="head-line">
    <h2>
      <span class="part1">
        {{ $t('services_heading') }}
      </span>
      <span class="part2">
        {{ $t('services_heading_') }}
      </span>
    </h2>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.head-line {
  font-family: 'Unbounded';
  text-transform: uppercase;
  width: 100%;

  @media (orientation: landscape) {
    font-size: 2.15rem;
    text-align: center;
    padding: 1.5rem 2.5rem;
  }

  @media (orientation: portrait) {
    font-size: 2.5rem;
    text-align: left;

    padding-top: 0;
    padding-inline: 1.5rem;
    padding-bottom: 2.5rem;
  }

  .part1 {
    color: var(--color-red-gray);
  }
  .part2 {
    color: var(--color);
  }
}
</style>