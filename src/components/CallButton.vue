<template>
	<a class="call-button" href="tel:+48793337695"> +48 79 333 7695 </a>
</template>

<script setup></script>

<style lang="scss" scoped>
.navigation-mobile .call-button {
	height: 4.5rem;
}

.call-button {
	border: 1px solid var(--color);
	color: var(--color);
	border-radius: 100vh;
	min-width: fit-content;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding-inline: 1.75rem;
	// font-size: 2rem !important;

	// @media (max-width: 720px) {
	// 	font-size: 2rem !important;
	// }

	&:hover,
	&:active {
		color: var(--color-light);
		text-shadow: 0 0 0.05rem var(--color50);
		box-shadow: inset 0 0 0.5rem var(--color50);
		border-color: var(--color50);
	}
}
</style>
