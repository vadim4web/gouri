<template>
  <div class="logo-box">
    <!-- <img src="/icons/web-app-manifest-192x192.png" alt="Gouri Logo"> -->
    <span class="shri">
      श्री
    </span>
    <span class="logo-span">
      <slot />
    </span>
  </div>
</template>

<style lang="scss">
.logo-box {
  /*
  transform: scale(1.33) translate(0, 50%) !important;
  background: white; */
  .shri {
    font-size: 3rem;
    border: 3px solid black;
    margin: 0.25rem 0 -0.25rem;
    line-height: 3rem;
    color: white;
    text-shadow: 0 0 3px var(--color);
    background: var(--color50);
  }
  .logo-span {
    transition: color 333ms, text-shadow 333ms;
  }
  .logo-span:hover {
    color: var(--color);
    text-shadow: 0 0 2px white;
  }
}
</style>