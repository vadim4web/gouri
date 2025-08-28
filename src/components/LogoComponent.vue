<template>
	<div class="logo-box">
		<!-- <img src="/icons/web-app-manifest-192x192.png" alt="Gouri Logo"> -->
		<span class="shri"></span>
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
	gap: 0.5rem;

	.shri {
		min-width: max-content;
		width: 3.5rem;
		height: 3.5rem;
		aspect-ratio: 1;
		background-image: url('/public/icons/favicon.png');
		background-position: center;
		background-size: cover;
		display: inline-block;
		align-self: center;
	}

	.logo-span {
		transition:
			color 333ms,
			text-shadow 333ms;

		line-height: 3.5rem;
		position: relative;
		top: 0.125em;
		text-transform: uppercase;
		font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-weight: 600;
		letter-spacing: 0.025ch;
		font-size: 3rem;
		transform: translateY(-0.25rem);
	}

	.logo-span:hover {
		color: var(--color);
		text-shadow: 0 0 2px white;
	}
}
</style>
