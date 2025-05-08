<template>
	<header class="header-mobile" :class="isMenuOpen ? 'bg-white' : ''">
		<logo-component class="header-logo"> Gouri </logo-component>

		<button
			class="menu-toggle"
			aria-label="open-close menu button"
			@click="isMenuOpen = !isMenuOpen"
		>
			<svg
				v-if="isMenuOpen"
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="close"
			>
				<path
					d="M4 4.98145L20 20.9814"
					stroke="#0F172A"
					stroke-width="2"
					stroke-miterlimit="10"
				/>
				<path
					d="M20 4.98145L4 20.9814"
					stroke="#0F172A"
					stroke-width="2"
					stroke-miterlimit="10"
				/>
			</svg>

			<svg
				v-else
				width="24"
				height="25"
				viewBox="0 0 24 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="open"
			>
				<rect x="3" y="5.98145" width="18" height="2" fill="#0F172A" />
				<rect x="3" y="11.9814" width="18" height="2" fill="#0F172A" />
				<rect x="3" y="17.9814" width="18" height="2" fill="#0F172A" />
			</svg>
		</button>

		<navigation-menu
			v-show="isMenuOpen"
			v-out-of-view="closeMenu"
			:close-menu="closeMenu"
		/>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import LogoComponent from './LogoComponent.vue'
import NavigationMenu from './NavigationMenu.vue'

const isMenuOpen = ref(false)

const closeMenu = () => (isMenuOpen.value = false)
</script>

<style lang="scss">
.header-mobile {
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	padding: 1rem 1.5rem;
	height: 5.5rem !important;
	font-weight: bold;
	position: relative;

	&.bg-white {
		background: white;
	}

	.menu-toggle {
		border: none;
		background: none;
		cursor: pointer;

		svg {
			width: 3.5rem;
			height: 3.5rem;
		}

		.close:hover path {
			stroke: var(--color);
		}

		.open:hover rect {
			fill: var(--color);
		}
	}
}

.header-mobile .header-logo.logo-box {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
	font-size: 1.75rem;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	min-width: max-content;
	margin-top: -1rem;

	@media (orientation: landscape) {
		transform: translateY(0.33rem);
	}

	@media (orientation: portrait) {
		transform: translateY(0.66rem);
	}

	.shri {
		width: 3.5rem;
		aspect-ratio: 1;
	}

	.logo-span {
		position: relative;
		top: 0.125em;
	}
}
</style>
