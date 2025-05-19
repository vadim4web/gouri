<template>
	<section class="hero pocket">
		<header-block v-if="width >= height" />
		<menu-block v-else />

		<div class="container">
			<div class="content">
				<h1 class="hero-headline unbounded">
					<span class="seo"> Юридическая помощь в Польше — GOURI </span>
					<span class="part1">
						{{ $t('hero_headline1') }}
						<span class="law">
							{{ $t('hero_headline1_') }}
						</span>
						{{ $t('hero_headline1__') }}
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

			<img
				src="/images/symbol.webp"
				alt="company spirit incapsulated in an image"
				class="hero-image"
				width="558"
				height="706"
			/>
		</div>

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
	display: flex;
	align-items: center;
	flex-wrap: wrap;
}

.hero-image {
	filter: drop-shadow(0 0 1rem var(--color));
	aspect-ratio: 558 / 706;
	object-fit: contain;


	@media (orientation: landscape) {
		height: 50dvh;
		bottom: 12.5dvh;
		right: 0;
		left: 33vw;
	}

	@media (orientation: portrait) {
		position: absolute;
		height: 30dvh;
		bottom: -11.5dvh;
		left: 50%;
		transform: translateX(-50%);
	}
}

.container {
	padding: 0 1rem;

	@media (orientation: landscape) {
		height: calc(85dvh - 5.5rem);
		padding: 0 7.5rem;
		display: grid;
		align-content: center;
		justify-items: center;
		place-items: center;
		grid-template-columns: 2fr 1fr;
	}

	@media (orientation: landscape) and (max-width: 720px) {
		padding: 0 3rem;
		grid-template-columns: 5fr 2fr;
	}

	@media (orientation: portrait) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		height: 60dvh;
		width: 30rem;
		max-width: 85%;
		margin: 0 auto;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 3rem;

		max-width: 100vw;

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
				text-align: left;
				color: var(--color);

				.law {
					position: relative;
					display: inline-block;

					&::before {
						position: absolute;
						content: '';
						background: url('/images/law.png');
						background-position: center;
						background-size: contain;
						background-repeat: no-repeat;
						width: 100%;
						aspect-ratio: 1;
						top: 0;
						bottom: 0;
						transform: scale(1.5) translateY(-75%);
						z-index: 1;
					}
				}
			}

			.part2 {
				display: inline-block;
				text-align: center !important;
			}
		}

		p {
			text-align: left;
			font-size: 1.25rem;
		}
	}
}
</style>
