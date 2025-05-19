<template>
	<div class="logo-box">
		<!-- <img src="/icons/web-app-manifest-192x192.png" alt="Gouri Logo"> -->
		<span class="shri"> श्री </span>
		<span class="logo-span">
			<slot />
		</span>
	</div>
</template>

<style lang="scss">
.logo-box {
	/*
  transform: scale(1.33) translate(0, 50%) !important;
  background: white; */
	display: flex;
	align-items: center;
	gap: 1rem;

	.shri {
		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
		min-width: max-content;
		width: 3.5rem;
		aspect-ratio: 1;
		font-size: 3rem;
		border: 3px solid black;
		margin: 0.25rem 0 -0.25rem;
		line-height: 3rem;
		color: white;
		text-shadow: 0 0 3px var(--color);
		background: var(--color);
		display: inline-block;
		align-self: center;
	}

	.logo-span {
		transition:
			color 333ms,
			text-shadow 333ms;

		line-height: 5rem;
		position: relative;
		top: 0.125em;

		font-family: 'Satisfy', cursive;

		font-weight: 400;
		font-style: normal;

		font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

		text-transform: uppercase;

		font-size: 3rem;
		transform: translateY(-0.25rem);
	}

	.logo-span:hover {
		color: var(--color);
		text-shadow: 0 0 2px white;
	}
}
</style>
