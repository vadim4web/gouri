<template>
	<div class="dev">
		{{ $t('developer') }}
		<a href="https://addvision.dev" target="_blank" rel="noopener">{<em>Add</em>}<strong>VISION</strong></a>
	</div>
</template>

<script setup></script>

<style lang="scss">
.dev a {
	color: var(--color);

	em,
	strong {
		color: white;
	}

	&,
	* {
		transition: color 333ms;
	}

	&:hover {
		color: white;

		em,
		strong {
			color: var(--color);
		}
	}
}
</style>
