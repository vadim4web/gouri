<template>
	<div class="dev">
		{{ $t('developer') }}
		<a href="https://addvision.dev" target="_blank" rel="noopener" class="paprika">AddVision.dev</a>
	</div>
</template>

<script setup></script>

<style lang="scss">
.dev a {
	color: white;
	z-index: 1;

	position: relative;
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background: #d1493a;
		transition: height 333ms;
		z-index: -1;
	}

	&:hover::after {
		height: 100%;
	}
}
</style>
