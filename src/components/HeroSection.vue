<template>
  <section>
    <header-block v-if="width >= 1024" />
    <menu-block v-else />

    <hr>
    {{ width }}
    <hr>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import HeaderBlock from './HeaderBlock.vue'
import MenuBlock from './MenuBlock.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>

<style lang="scss" scoped>

</style>