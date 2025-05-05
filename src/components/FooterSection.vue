<template>
	<footer class="footer-section">
		<logo-component class="footer-logo"> GOURI </logo-component>

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

	&::after {
		position: absolute;
		width: 100%;
		height: 0.5rem;
		content: '';
		bottom: -0.5rem;
		left: 0;
		background: var(--color-footer);
	}

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
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	font-size: 1.75rem;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	min-width: max-content;

	@media (orientation: landscape) {
		transform: translateY(0.33rem);
	}

	@media (orientation: portrait) {
		transform: translateY(0.66rem);
	}

	img {
		width: 3.5rem;
		aspect-ratio: 1;
	}

	.logo-span {
		position: relative;
		top: 0.125em;
	}
}
</style>
