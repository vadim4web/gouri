<template>
  <div class="symbolic-image-wrapper">
    <div class="symbolic-image">
      <img src="/images/heart.png" alt="Heart Ruby - With Love" class="heart">
      <img src="/images/poland.png" alt="Poland - stamp example" class="stamp">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.symbolic-image-wrapper {
  border: 1px solid var(--color50);
  /* box-shadow: 0 0 2.5rem var(--color50); */
  height: 27.5rem;
  aspect-ratio: calc(1 / sqrt(2));
  background: white;


  .symbolic-image {
    position: relative;
    padding-bottom: 10rem;
    margin: -2.5rem;
    transform: rotate(12.5deg) translate(3.6rem, 0);

    .heart {
      transform-origin: center bottom;
      transform: rotate(-25deg);
    }

    .stamp {
      position: absolute;
      bottom: 0;
      z-index: -1;
      transform: rotate(45deg);
    }
  }
}
</style>