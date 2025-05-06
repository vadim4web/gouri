<template>
	<section class="three-blocks">
		<h2 class="unbounded">
			{{ $t('three_blocks_heading') }}
		</h2>
		<div class="blocks">
			<div v-for="(block, index) in 3" :key="index" class="block">
				<span class="block-number angry">
					{{ '0' + (index + 1) }}
				</span>

				<h3 class="block-heading montserrat">
					{{ $t(`three_blocks_${block}`) }}
				</h3>

				<p class="block-text montserrat">
					{{ $t(`three_blocks_${block}_`) }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss">
.three-blocks {
	margin-top: 12.5dvh;

	@media (orientation: portrait) {
		padding: 5rem 1rem;
	}

	@media (orientation: landscape) {
		padding: 7.5rem;
	}

	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;

		@media (orientation: portrait) {
			font-size: 2rem;
		}

		@media (orientation: landscape) {
			font-size: 2.5rem;
		}
	}

	.blocks {
		display: flex;
		gap: 1rem;

		@media (orientation: portrait) {
			flex-direction: column;
			align-items: start;
			justify-content: center;
		}

		@media (orientation: landscape) {
			flex-direction: row;
			align-items: center;
			justify-content: start;
		}

		.block {
			text-align: left;
			border: 1px solid var(--color-red-gray);
			border-radius: 2.5rem;

			display: flex;
			flex-direction: column;
			gap: 1rem;

			@media (orientation: portrait) {
				padding: 1.5rem;
				width: 100%;
				height: 20rem;
			}

			@media (orientation: landscape) {
				padding: 2.5rem;
				width: calc(100% / 3);
				height: 25rem;
			}

			.block-number {
				color: var(--color);
				font-size: 1.5rem;
			}

			.block-heading {
				font-size: 1.75rem;
				line-height: 1.5;
			}

			.block-text {
				line-height: 1.4;
				font-size: 1.25rem;
				color: var(--color-dimmed);
				font-weight: 500;
			}
		}
	}
}
</style>
