<template>
	<section id="contact-us" class="contact-us-section">
		<div class="side-a">
			<h2 class="unbounded">
				<img
					src="/images/arrow-contacts.png"
					alt="arrow calling to contact us"
				/>

				<span class="part1">
					{{ $t('contact_us_heading') }}
				</span>
				<br />
				<span class="part2">
					{{ $t('contact_us_heading_') }}
				</span>
			</h2>

			<div class="sentences">
				<span class="sentence sentence1">
					{{ $t('contact_us_1') }}
				</span>
				<span class="sentence sentence2">
					{{ $t('contact_us_2') }}
				</span>
			</div>

			<social-media />
		</div>

		<div class="side-b">
			<div class="top">
				<h3>
					{{ $t('contact_us_CTA') }}
				</h3>

				<email-form class="email-form" />
			</div>

			<address-links />
		</div>
	</section>
</template>

<script setup>
import SocialMedia from './SocialMedia.vue'
import EmailForm from './EmailForm.vue'
import AddressLinks from './AddressLinks.vue'
</script>

<style lang="scss">
.contact-us-section {
	background: var(--color-dimmed);
	color: white;
	position: relative;
	gap: 5rem;
	margin-bottom: -2px;

	@media (orientation: landscape) {
		padding: 5rem 7.5rem 7.5rem;

		display: grid;
		grid-template-columns: 2fr 1fr;
		width: 100%;
	}

	@media (orientation: portrait) {
		padding: 5rem 1rem;

		display: flex;
		flex-direction: column;
	}

	h2 {
		text-align: left;
		text-transform: uppercase;
		text-wrap: nowrap;

		img {
			position: relative;
			left: -0.5rem;
			top: 0.5rem;
		}

		@media (orientation: landscape) {
			font-size: 4rem;

			img {
				width: 5rem;
				height: 5rem;

				float: left;
			}
		}

		@media (orientation: portrait) {
			font-size: 3rem;

			img {
				width: 3.5rem;
				height: 3.5rem;
			}
		}
	}

	.side-a {
		display: flex;
		flex-direction: column;

		.sentences {
			font-size: 1.33rem;
			text-align: left;
		}

		@media (orientation: landscape) {
			gap: 5rem;

			.sentences {
				padding-left: 5rem;
			}
		}

		@media (orientation: portrait) {
			gap: 2.5rem;

			.sentences {
				padding-left: 2.5rem;
			}
		}
	}

	.side-b {
		display: flex;
		flex-direction: column;

		h3 {
			font-size: 1.66rem;
			text-align: left;
		}

		.top {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}

		@media (orientation: landscape) {
			gap: 5rem;
		}

		@media (orientation: landscape) and (max-width: 1399px) {
			.email-form {
				flex-wrap: wrap;
			}
		}

		@media (orientation: portrait) {
			gap: 2.5rem;
		}
	}

	.email-form .email {
		max-width: 45ch;
	}
}
</style>
