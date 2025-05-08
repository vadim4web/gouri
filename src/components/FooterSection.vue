<template>
	<footer class="footer-section">
		<logo-component class="footer-logo"> Gouri </logo-component>

		<div class="footer-copy">
			{{ $t('copyright') }} &copy; 2018 - {{ new Date().getFullYear() }}
			{{ currentURL || 'gouri.com.pl' }}
		</div>

		<dev-component />
	</footer>
</template>

<script setup>
import { computed } from 'vue'
import LogoComponent from './LogoComponent.vue'
import DevComponent from './DevComponent.vue'

const currentURL = computed(
	() => window.location.href.split('/').filter(url => url)[1]
)
</script>

<style lang="scss">
.footer-section {
	display: flex;
	min-height: 5rem;
	background: var(--color-footer);
	position: relative;
	align-items: center;
	justify-content: space-between;
	color: white;
	gap: 2.5rem;
	font-size: 1.25rem;

	@media (orientation: landscape) {
		flex-direction: row;

		.footer-copy {
			transform: translateY(0.33rem);
		}
		padding: 1.5rem 5rem;
	}

	@media (orientation: portrait) {
		flex-direction: column;
		padding: 2.5rem 1rem;
	}
}

.footer-section .footer-logo.logo-box {
	font-size: 1.75rem;

	.logo-span {
		font-size: 2.5rem;
	}

	@media (orientation: landscape) {
		transform: translateY(0.33rem);
	}

	@media (orientation: portrait) {
		transform: translateY(0.66rem);
	}
}
</style>
