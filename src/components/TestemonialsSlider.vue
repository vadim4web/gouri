<template>
	<div class="slider-container">
		<vueper-slides
			class="no-shadow montserrat"
			fixed-height
			:visible-slides="width > height ? 3 : 2"
			:slide-multiple="width > height ? 3 : 0"
			:gap="1"
			:slide-ratio="0.36"
			:dragging-distance="100"
			:bullets="false"
			arrows-outside
			autoplay
			duration="10000"
		>
			<template #arrow-left>
				<svg
					class="icon icon-arrow-left"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10.0742 3.35352L3.16797 11.3535M3.16797 11.3535L10.0742 19.3535M3.16797 11.3535L20.168 11.3535"
						stroke="white"
						stroke-width="2"
					/>
				</svg>
			</template>

			<template #arrow-right>
				<svg
					class="icon icon-arrow-right"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M13.2617 19.3535L20.168 11.3535M20.168 11.3535L13.2617 3.35351M20.168 11.3535L3.16797 11.3535"
						stroke="white"
						stroke-width="2"
					/>
				</svg>
			</template>
			<vueper-slide
				v-for="i in 12"
				:key="i"
				:title="$t(`testemonials_${i}`)"
				:content="$t(`testemonials_${i}_`)"
				:class="(i + 2) % 3 === 0 ? 'third' : ''"
			/>
		</vueper-slides>
	</div>
</template>

<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
</script>

<style lang="scss">
.vueperslides {
	margin: 0 auto;
	color: white;

	@media (orientation: landscape) {
		width: 100%;
	}

	@media (orientation: portrait) {
		width: 175%;
	}
}

.slider-container {
	padding: 5rem 0;
}

.vueperslides__arrow svg {
	width: 4.5rem;
	height: 4.5rem;
}

.vueperslide {
	border-radius: 2.5rem;
	padding: 2.5rem;
	background: var(--color-dimmed);
	filter: contrast(1) brightness(1);
	transition: filter 0.5s ease;

	&:hover {
		filter: contrast(1.25) brightness(1.25);
		transition: filter 0.5s ease;
	}
}

.third {
	background: var(--color);
}

.vueperslide__content-wrapper {
	gap: 1.5rem;
	position: relative;

	&::before {
		position: absolute;
		top: 0;
		left: 0;
		content: '”';
		font-family: 'Angry', sans-serif;
		font-display: swap;
		font-size: 5rem;
	}
}

.third.vueperslide .vueperslide__content-wrapper::before {
	color: white;
}
:not(.third) .vueperslide__content-wrapper::before {
	color: var(--color-light);
}

:not(.third).vueperslide {
	border: 1px solid white;
}

.third.vueperslide {
	border: 1px solid var(--color);
}

.vueperslide__title {
	font-size: 1.33rem;
	text-align: left;
}

.vueperslide__content {
	text-transform: uppercase;
	font-weight: bold;
	align-self: flex-start;
}

.vueperslides__arrows {
	transform: translate(2rem, 2.5rem);

	@media (orientation: landscape) {
		.vueperslides__arrow--next {
			transform: translate(-75dvw, -2.4rem);
		}
	}

	@media (orientation: portrait) {
		.vueperslides__arrow--next {
			transform: translate(-80dvw, -2.5rem);
		}
	}
}

.vueperslides--fixed-height {
	height: 30rem;
}

.vueperslides__track {
	padding-block: 1px;
}
</style>
