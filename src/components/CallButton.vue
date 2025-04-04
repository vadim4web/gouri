<template>
  <a class="call-button" href="tel:+48793337695">
    +48 79 333 7695
  </a>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.call-button {
  border: 1px solid var(--color);
  color: var(--color);
  border-radius: 100vh;
  min-width: fit-content;
  padding: 1rem 1.75rem;
  height: 3.5rem;

  &:hover {
    color: var(--color-light);
    text-shadow: 0 0 .05rem var(--color50);

    border-color: var(--color50);
    box-shadow: inset 0 0 .5rem var(--color50);
  }
}
</style>