<template>
	<form class="email-form" @submit.prevent="submitForm">
		<label for="email" class="email">
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M3 5V4C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5H3ZM21 5H22C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4V5ZM3 6H21V4H3V6ZM20 5V17H22V5H20ZM19 18H5V20H19V18ZM4 17V5H2V17H4ZM5 18C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17H2C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20V18ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18V20C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17H20Z"
					fill="var(--color-red-gray)"
				/>
				<path
					d="M3 5L12 14L21 5"
					stroke="var(--color-red-gray)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
			<input
				id="email"
				v-model="email"
				type="email"
				required
				:placeholder="$t('email_placeholder')"
				autocomplete="mail"
			/>
		</label>
		<label for="submit" class="submit">
			<button id="submit" type="submit">
				{{ $t('submitText') }}

				<span>
					<svg
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_3038_37)">
							<path
								d="M15.6529 13.3579L15.0084 4.57427M15.0084 4.57427L6.22479 3.92978M15.0084 4.57427L4.99103 14.5916"
								stroke="#0F172A"
								stroke-width="2"
							/>
						</g>
						<defs>
							<clipPath id="clip0_3038_37">
								<rect width="20" height="20" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</span>
			</button>
		</label>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const USER_KEY = import.meta.env.VITE_EMAILJS_USER_KEY

const email = ref('')

const submitForm = async () => {
	const text = `
        Lang: ${locale.value}
        Email: ${email.value}
      `

	try {
		const templateParams = {
			message: text.trim(),
		}

		const response = await emailjs.send(
			SERVICE_ID,
			TEMPLATE_ID,
			templateParams,
			{
				publicKey: USER_KEY,
			}
		)
		console.log('Email sent successfully!', response)
	} catch (error) {
		console.error('Error sending email:', error)
	}

	email.value = ''
}
</script>

<style lang="scss" scoped>
.email-form {
	font-family: 'Montserrat';
	display: flex;
	gap: 0.5rem;

	.email,
	#submit {
		border-radius: 2.5rem;

		padding-left: 1.5rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.email {
		background: white;
		padding-right: 1.5rem;
		padding-block: 1rem;
		font-size: 0.75rem;

		svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	.email > input {
		border: none;
		width: 100%;

		&::placeholder {
			color: var(--color-red-gray);
		}

		&:focus,
		&:focus-visible {
			outline: none;
		}

		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus,
		&:-webkit-autofill:active {
			-webkit-background-clip: text;
			-webkit-text-fill-color: black;
			box-shadow: inset 0 0 3rem 3rem white;

			&::selection {
				-webkit-text-fill-color: white;
			}
		}
	}

	.email,
	.email > input {
		width: 20rem;
	}

	@media (orientation: portrait) {
		flex-direction: column;
		gap: 1rem;

		.email,
		.email > input {
			width: 100%;
		}
	}

	.submit > button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: white;
		border: none;
		text-transform: uppercase;
		background: var(--color);
		padding-block: 0.375rem;
		cursor: pointer;
		border: 1px solid var(--color);

		span {
			padding: 0.75rem;
			border-radius: 50%;
			background: white;
			position: relative;
			border: 1px solid var(--color);

			svg {
				width: 1.25rem;
				height: 1.25rem;
			}
		}

		&:hover,
		&:active {
			background: var(--color-light);

			text-shadow: 0 0 0.05rem var(--color50);
			border-color: var(--color50);
			box-shadow: inset 0 0 0.5rem var(--color50);

			span {
				border-color: var(--color50);
				box-shadow: 0 0 0.5rem var(--color50);
			}
		}
	}
}
</style>
