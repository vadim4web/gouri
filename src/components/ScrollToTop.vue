<template>
	<button
		v-show="visible"
		class="scroll-top"
		:style="{ '--progress': progress + '%' }"
		aria-label="scroll to top"
		@click="scrollTop"
	>
		<span class="arrow">
			<svg viewBox="0 0 24 24" width="18" height="18">
				<path
					d="M12 19V5M5 12l7-7 7 7"
					stroke="currentColor"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</span>

		<span class="tooltip">
			{{ $t('scroll_top') }}
		</span>
	</button>
</template>

<script setup>
import { computed } from 'vue'
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const { y } = useWindowScroll()
const { height } = useWindowSize()

const visible = computed(() => y.value > 60)

const progress = computed(() => {
	const docHeight = document.documentElement.scrollHeight - height.value

	if (docHeight <= 0) return 0

	return Math.min((y.value / docHeight) * 100, 100)
})

function scrollTop() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
}
</script>

<style scoped lang="scss">
.scroll-top {
	position: fixed;

	right: 2.5rem;
	bottom: 2.5rem;

	width: 4rem;
	height: 4rem;

	border-radius: 50%;
	border: none;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 999;

	/* Progress + Glass */
	background:
		conic-gradient(
			var(--color) calc(var(--progress) * 1%),
			rgba(255, 255, 255, 0.2) 0
		),
		rgba(255, 255, 255, 0.9);

	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);

	color: white;

	box-shadow:
		0 8px 24px rgba(0, 0, 0, 0.2),
		inset 0 0 0 1px rgba(255, 255, 255, 0.55);

	transition:
		transform 0.25s ease,
		opacity 0.25s ease,
		box-shadow 0.25s ease;
}

.scroll-top:hover {
	transform: translateY(-4px) scale(1.05);

	box-shadow:
		0 14px 32px rgba(0, 0, 0, 0.28),
		inset 0 0 0 1px rgba(255, 255, 255, 0.65);
}

.scroll-top:active {
	transform: translateY(0) scale(0.96);
}

/* Arrow */
.arrow svg {
	width: 2.2rem;
	height: 2.2rem;

	filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.85))
		drop-shadow(0 2px 6px rgba(0, 0, 0, 0.6));
}

/* ⭐ Tooltip premium glass */
.tooltip {
	position: absolute;

	right: 110%;
	top: 50%;

	transform: translateY(-50%) scale(0.9);

	padding-inline: 1.5rem;
	height: 4rem;

	display: inline-flex;
	align-items: center;

	border-radius: 0.85rem;

	font-size: 1rem;
	letter-spacing: 0.1em;

	white-space: nowrap;

	background:
		conic-gradient(
			var(--color) calc(var(--progress) * 1%),
			rgba(255, 255, 255, 0.2) 0
		),
		rgba(255, 255, 255, 0.9);

	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);

	color: white;
	font-weight: bold;
	text-transform: uppercase;

	text-shadow:
		0 0 1px rgba(0, 0, 0, 0.85),
		0 0 4px rgba(0, 0, 0, 0.85),
		0 0 7px rgba(0, 0, 0, 0.85);

	box-shadow:
		0 14px 32px rgba(0, 0, 0, 0.28),
		inset 0 0 0 1px rgba(255, 255, 255, 0.65);

	opacity: 0;
	pointer-events: none;

	transition: all 0.28s ease;
}

.scroll-top:hover .tooltip {
	opacity: 1;
	right: 125%;
	transform: translateY(-50%) scale(1);
}

/* Mobile */
@media (max-width: 640px) {
	.scroll-top {
		right: 2rem;
		bottom: 2rem;

		width: 3.5rem;
		height: 3.5rem;
	}
}
</style>
