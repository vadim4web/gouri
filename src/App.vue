<script setup>
import { ref, provide } from "vue"

import HeroSection from '~/components/HeroSection.vue'
import ThreeBlocks from '~/components/ThreeBlocks.vue'
import HeadLine from '~/components/HeadLine.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import TestimonialsSection from '~/components/TestimonialsSection.vue'
import FaqSection from '~/components/FaqSection.vue'
import ContactsSection from '~/components/ContactsSection.vue'
import FooterSection from '~/components/FooterSection.vue'
import ThankYou from '~/components/ThankYou.vue'

// global reactive state
const sentEvent = ref(null)

function trigger(type) {
  sentEvent.value = type
  setTimeout(() => (sentEvent.value = null), 5000)
}

provide("thankYou", { sentEvent, trigger })
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
	<thank-you />
</template>
