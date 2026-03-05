<template>
	<div class="dev">
		{{ $t('developer') }}
		<a href="https://vadim4web.github.io" target="_blank" rel="noopener"><strong>vadim4web</strong></a>
	</div>
</template>

<script setup></script>

<style lang="scss">
@media (orientation: landscape) {
	.dev {
		transform: translate(4.5rem, 2rem);
	}
}
.dev a {
	color: var(--color);

	strong {
		color: white;
	}

	&,
	* {
		transition: color 333ms;
	}

	&:hover {
		color: white;

		strong {
			color: var(--color);
		}
	}
}
</style>
