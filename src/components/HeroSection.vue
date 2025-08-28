<template>
	<section ref="hero" class="hero pocket" :style="heroStyle">
		<header-block v-if="width >= height" />
		<menu-block v-else />

		<div ref="container" class="container">
			<div class="content">
				<h1 class="hero-headline unbounded">
					<span class="seo">Юридическая помощь в Польше — GOURI</span>
					<span class="part1">
						{{ $t('hero_headline1') }}
						<span class="law">
							{{ $t('hero_headline1_') }}
						</span>
						{{ $t('hero_headline1__') }}
					</span>
					<br />
					<span class="part2">{{ $t('hero_headline2') }}</span>
				</h1>
				<p>{{ $t('hero_moto') }}</p>
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const { width, height } = useWindowSize()
const container = ref(null)

const defaultAngle = 0
const angle = ref(defaultAngle) // current animated angle
const targetAngle = ref(defaultAngle) // where we want to go

const heroStyle = computed(() => ({
	background: `linear-gradient(${angle.value}deg, var(--color-red-gray), #fff)`
}))

function handleMouseMove(e) {
	if (!container.value) return
	const rect = container.value.getBoundingClientRect()

	const cx = rect.left + rect.width / 2
	const cy = rect.top + rect.height / 2

	const dx = e.clientX - cx
	const dy = e.clientY - cy

	// atan2 returns radians, rotate 90deg to align with CSS convention
	let deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90

	// keep within 0-360
	if (deg < 0) deg += 360

	targetAngle.value = deg
}

function handleMouseLeave() {
	targetAngle.value = defaultAngle
}

// --- smooth animation loop ---
let rafId
function animate() {
	// interpolate angle toward target
	const diff = targetAngle.value - angle.value

	// normalize shortest rotation (avoid jumping across 360/0 boundary)
	const shortest = ((diff + 540) % 360) - 180

	// step toward target
	angle.value += shortest * 0.1 // smoothing factor (0.1 = 10%)

	rafId = requestAnimationFrame(animate)
}

onMounted(() => {
	if (!container.value) return
	container.value.addEventListener('mousemove', handleMouseMove)
	container.value.addEventListener('mouseleave', handleMouseLeave)

	animate() // start loop
})

onBeforeUnmount(() => {
	if (!container.value) return
	container.value.removeEventListener('mousemove', handleMouseMove)
	container.value.removeEventListener('mouseleave', handleMouseLeave)

	cancelAnimationFrame(rafId)
})
</script>

<style lang="scss">
.hero {
	background: linear-gradient(0deg, var(--color-red-gray), #fff);
	transition: background 1s ease; // smoother return
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
						width: min(5rem, 9vmin);
						aspect-ratio: 1;
						top: 0;
						left: 50%;
						bottom: 0;
						transform: scale(1.5) translate(-33%, max(-75%, -7vmin));
						z-index: 1;
					}

					@media (orientation: portrait) {
						&::before {
							width: 3.5rem;
							left: 0;
							transform: scale(1.5) translate(1rem, -75%);
						}
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
