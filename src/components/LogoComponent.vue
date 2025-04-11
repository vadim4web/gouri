<template>
  <div class="logo-box">
    <img src="/icons/web-app-manifest-192x192.png" alt="Gouri Logo">
    <span class="logo-span">
      <slot />
    </span>
  </div>
</template>

<style>
.logo-span {
  transition: color 333ms, text-shadow 333ms;
}
.logo-span:hover {
  color: var(--color);
  text-shadow: 0 0 2px white;
}
</style>