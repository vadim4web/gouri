<template>
	<section id="about-us" class="about-section pocket">
		<div class="flex">
			<h2 class="about-heading">
				{{ $t('about_heading') }}
				<img src="/images/arrow-b-r.png" alt="arrow accenting approach" />
			</h2>

			<img
				src="/images/symbol.webp"
				alt="company approach visualized"
				class="about-image"
				loading="lazy"
				width="558"
				height="706"
			/>
		</div>

		<div class="about-description">
			<span
				v-for="(point, index) in 3"
				:key="index"
				class="point"
				:class="index === 2 ? 'emphesize' : ''"
			>
				{{ $t(`about_${point}`) }}
			</span>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss">
.about-section {
	gap: 5rem;
	position: relative;
	z-index: 1;
	background: white;

	@media (orientation: landscape) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		justify-items: center;
		padding: 7.5rem;
	}

	@media (orientation: portrait) {
		display: flex;
		flex-direction: column;
		padding: 5rem 1rem;
	}

	.about-heading {

		text-transform: uppercase;
		max-width: min-content;
		text-align: left;
		position: relative;

		@media (orientation: landscape) {
			font-size: 3rem;
		}

		@media (orientation: portrait) {
			font-size: 4rem;
		}

		img {
			aspect-ratio: 1;
			position: absolute;
			top: 0.33ch;
			right: 0;
			width: 1.5ch;
		}
	}

	.about-image {
		filter: drop-shadow(0 0 1rem var(--color));

		aspect-ratio: 558 / 706 !important;

		@media (orientation: landscape) {
			height: 20rem;
			width: 15.8rem;
		}

		@media (orientation: portrait) {
			width: 15rem;
			height: 19rem;
			margin-inline: auto;

			margin-top: 0;
			margin-bottom: -5rem;
		}
	}

	.about-description {
		text-align: left;
		font-size: 1.5rem;
		line-height: 2.5rem;

		@media (orientation: landscape) {
			align-self: flex-end;
			padding-left: 3.25rem;
		}

		@media (orientation: portrait) {
		}

		.emphesize {
			font-weight: bolder;
		}
	}
}
</style>
