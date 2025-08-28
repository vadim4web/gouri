<template>
	<section id="services" class="services-section">
		<div class="services">
			<div
				v-for="(service, index) in 6"
				:key="index"
				class="service"
				:class="index === 5 ? 'CTA' : ''"
			>
				<span>
					<img
						v-if="index !== 5"
						src="/images/arrow-b-r.svg"
						:alt="'arrow pointing service ' + index"
						width="108"
						height="108"
					/>
				</span>
				<span class="service-name unbounded">
					{{ $t(`services_${service}`) }}
				</span>
				<span class="service-description montserrat">
					{{ $t(`services_${service}_`) }}

					<request-call v-if="index === 5" />
				</span>
			</div>
		</div>
	</section>
</template>

<script setup>
import RequestCall from './RequestCall.vue'
</script>

<style lang="scss">
.services-section {
	@media (orientation: landscape) {
		padding: 0 2.5rem 1rem;
	}

	@media (orientation: portrait) {
		padding: 0 1rem 1rem;
	}

	.services {
		display: flex;
		flex-direction: column;
		color: white;

		.service {
			position: relative;
			background: var(--color-dimmed);
			display: grid;
			border-style: solid;
			border-width: 0 0 2px;
			border-color: white;

			transform: scale(1);
			box-shadow: 0 0 0 transparent;
			margin-block: 0;

			transition: transform 0.5s ease, box-shadow 0.5s ease, margin 0.5s ease;

			&:hover {
				transform: scale(1.025);
				box-shadow: 0 0 1rem var(--color-red-gray);
				margin-block: 0.25%;
				transition: transform 0.5s ease, box-shadow 0.5s ease, margin 0.5s ease;
			}

			img {
				width: 1.5rem;
				height: 1.5rem;
			}

			@media (orientation: landscape) {
				& {
					grid-template-columns: 1.5rem 1fr 1fr;
					padding: 3.5rem 5rem;
					gap: 5rem;
				}
			}

			@media (orientation: portrait) {
				& {
					grid-template-rows: 1.5rem 1fr 1fr;
					text-align: left;
					padding: 2.5rem 1.5rem;
					gap: 1rem;
				}
			}

			&:first-child {
				border-top-left-radius: 2.5rem;
				border-top-right-radius: 2.5rem;
			}

			&:last-child {
				border-bottom-left-radius: 2.5rem;
				border-bottom-right-radius: 2.5rem;
			}

			.service-name {
				text-transform: none;

				@media (orientation: landscape) {
					font-size: 2.5rem;
				}

				@media (orientation: portrait) {
					font-size: 2rem;
				}
			}

			.service-description {
				font-size: 1.33rem;
			}

			&.CTA {
				background: var(--color);

				@media (orientation: portrait) {
					grid-template-rows: 1.5rem 1fr 3fr;
				}

				.service-description {
					display: flex;
					flex-direction: column;
					gap: 1rem;
				}
			}
		}
	}
}
</style>
