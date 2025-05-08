<template>
	<section class="hero pocket">
		<header-block v-if="width >= height" />
		<menu-block v-else />

		<div class="container">
			<div class="content">
				<h1 class="hero-headline unbounded">
					<span class="seo">
						Юридическая помощь в Польше — GOURI
					</span>
					<span class="part1">
						{{ $t('hero_headline1') }}
					</span>
					<br />
					<span class="part2">
						{{ $t('hero_headline2') }}
					</span>
				</h1>
				<p>
					{{ $t('hero_moto') }}
				</p>
				<email-form />
			</div>
		</div>

		<img
			src="/images/symbol.webp"
			alt="company spirit incapsulated in an image"
			class="hero-image"
			width="558"
			height="706"
		/>
	</section>
</template>

<script setup>
import HeaderBlock from './HeaderBlock.vue'
import MenuBlock from './MenuBlock.vue'
import EmailForm from './EmailForm.vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<style lang="scss">
.hero {
	background: linear-gradient(180deg, #fff, var(--color-red-gray));
	height: 87.5dvh;
	position: relative;
}

.hero-image {
	filter: drop-shadow(0 0 1rem var(--color));
	aspect-ratio: 558 / 706;
	object-fit: contain;
	position: absolute;

	@media (orientation: landscape) {
		height: 50dvh;
		bottom: 12.5dvh;
		right: 5rem;
	}

	@media (orientation: portrait) {
		height: 30dvh;
		bottom: -11.5dvh;
		left: 50%;
		transform: translateX(-50%);
	}
}

.container {
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 0 1rem;

	overflow-x: hidden;

	@media (orientation: landscape) {
		height: calc(85dvh - 5.5rem);
		padding: 0 0 0 7.5rem;
		max-width: max(55vw, 85ch);
	}

	@media (orientation: portrait) {
		height: 60dvh;
		flex-direction: column;
		width: 30rem;
		max-width: 85%;
		margin: 0 auto;
	}

	.content {
		text-align: left;
		display: flex;
		flex-direction: column;
		gap: 3rem;

		max-width: 100vw;
		overflow-x: hidden;

		@media (orientation: portrait) {
			gap: 2.5rem;
		}

		h1 {
			font-weight: 500;

			@media (orientation: portrait) {
				font-size: 2.5rem;
			}

			@media (orientation: landscape) {
				font-size: 3.5rem;
			}

			.part1 {
				color: var(--color);
			}
		}

		p {
			font-size: 1.25rem;
		}
	}
}
</style>
