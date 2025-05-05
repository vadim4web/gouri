<template>
	<section class="testemonials-section">
		<h2 class="testemonials-heading">
			<span class="part1" :data-text="$t('testemonials_header')">
				{{ $t('testemonials_header') }}
			</span>
			<br />
			<span class="part2">
				{{ $t('testemonials_header_') }}
			</span>
			<wbr />
			<span class="part3" :data-text="$t('testemonials_header__')">
				{{ $t('testemonials_header__') }}
			</span>
		</h2>

		<testemonials-slider />
	</section>
</template>

<script setup>
import TestemonialsSlider from './TestemonialsSlider.vue'
</script>

<style lang="scss" scoped>
.testemonials-section {
	background: var(--color-dimmed);
	position: relative;
	transform: scaleY(1.0765) translateY(-2.5rem);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 2.5rem;

	@media (orientation: landscape) {
		padding: 12.5rem 1.5rem 7.5rem 20rem;
	}

	@media (orientation: portrait) {
		padding: 10rem 1rem 5rem;
	}

	.testemonials-heading {
		text-align: left;
		text-transform: uppercase;
		font-family: 'Unbounded';

		.part2 {
			color: var(--color-grey);
			text-shadow: 0 0 3px var(--color-coal);
		}

		.part1,
		.part3 {
			display: inline-block;
			color: var(--color-dimmed);
			text-shadow: 0 0 3px white;
			position: relative;

			&::before,
			&::after {
				position: absolute;
				left: 0;
				content: attr(data-text);
			}
		}

		@media (orientation: landscape) {
			font-size: 4rem;
		}

		@media (orientation: portrait) {
			font-size: 3rem;
		}
	}
}
</style>
