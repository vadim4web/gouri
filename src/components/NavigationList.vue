<template>
	<nav class="navigation">
		<menu class="navigation-menu">
			<li class="navigation-menu-item">
				<a href="#services">{{ $t('services') }}</a>
			</li>
			<li class="navigation-menu-item">
				<a href="#about-us">{{ $t('aboutUs') }}</a>
			</li>
			<li class="navigation-menu-item">
				<a href="#contact-us">{{ $t('contactUs') }}</a>
			</li>
		</menu>

		<Language-select />

		<call-button />
	</nav>
</template>

<script setup>
import LanguageSelect from './LanguageSelect.vue'
import CallButton from './CallButton.vue'
</script>

<style lang="scss" scoped>
.navigation {
	display: grid;
	grid-template-columns: 6.5fr 2fr 3.5fr;
	align-content: center;
	justify-items: center;
}
.navigation-menu {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	align-items: center;

	&-item {
		padding: 1rem;
		min-width: fit-content;
	}
}
[href^='#'] {
	text-transform: uppercase;
}
</style>
