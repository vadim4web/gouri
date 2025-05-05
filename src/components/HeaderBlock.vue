<template>
	<header class="header">
		<logo-component class="header-logo"> GOURI </logo-component>

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

.header .header-logo.logo-box {
	display: flex;

	flex-direction: column;

	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	min-width: max-content;

	margin: -1rem 0;
	transform: translateY(0.36rem);

	img {
		width: 3.5rem;
		aspect-ratio: 1;
		margin: -0.75rem 0;
	}
}
</style>
