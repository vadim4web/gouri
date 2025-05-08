<template>
	<header class="header">
		<logo-component class="header-logo"> Gouri </logo-component>

		<navigation-list />
	</header>
</template>

<script setup>
import LogoComponent from './LogoComponent.vue'
import NavigationList from './NavigationList.vue'
</script>

<style lang="scss">
.header {
	display: grid;
	grid-template-columns: 1fr 3.5fr;

	height: 5.5rem;

	align-content: center;
	align-items: center;
	justify-content: center;
	justify-items: center;
	place-items: center;

	width: 100%;
	padding: 1rem 5rem;

	font-weight: bold;

	& > * {
		width: 100%;
	}
}
</style>
