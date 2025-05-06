<script setup>
import HeroSection from '~/components/HeroSection.vue'
import { defineAsyncComponent } from 'vue'

const ThreeBlocks = defineAsyncComponent(() => import('~/components/ThreeBlocks.vue'))
const HeadLine = defineAsyncComponent(() => import('~/components/HeadLine.vue'))
const ServicesSection = defineAsyncComponent(() => import('~/components/ServicesSection.vue'))
const AboutSection = defineAsyncComponent(() => import('~/components/AboutSection.vue'))
const TestimonialsSection = defineAsyncComponent(() => import('~/components/TestimonialsSection.vue'))
const FaqSection = defineAsyncComponent(() => import('~/components/FaqSection.vue'))
const ContactsSection = defineAsyncComponent(() => import('~/components/ContactsSection.vue'))
const FooterSection = defineAsyncComponent(() => import('~/components/FooterSection.vue'))
</script>

<template>
  <hero-section />
  <three-blocks />
  <head-line />
  <services-section />
  <about-section />
  <testimonials-section />
  <faq-section />
  <contacts-section />
  <footer-section />
</template>