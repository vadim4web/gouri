<template>
	<transition name="fade">
		<div v-if="visible" :class="['thankyou-overlay', overlayClass]">
			<div class="thankyou-box">
				<p>{{ $t(`thankyou.${sentEvent}`) }}</p>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { inject, computed } from 'vue'

const { sentEvent } = inject('thankYou')

const visible = computed(() => !!sentEvent.value)

// dynamic overlay gradient
const overlayClass = computed(() => {
	switch (sentEvent.value) {
		case 'phone':
			return 'overlay-phone'
		case 'email':
			return 'overlay-email'
		case 'error':
			return 'overlay-error'
		default:
			return ''
	}
})
</script>

<style scoped>
.thankyou-overlay {
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
}

.thankyou-box {
	background: white;
	padding: 2rem;
	border-radius: 12px;
	font-size: 1.2rem;
	font-weight: 600;
	max-width: 400px;
	text-align: center;
	color: var(--color-coal);
}

/* gradients for each type */
/* PHONE SUCCESS: softer, balanced red-gray spectrum */
.overlay-phone {
	background: linear-gradient(
		135deg,
		var(--color-coal-a),
		var(--color-red-gray-a),
		var(--color-light-a)
	);
}

/* EMAIL SUCCESS: elegant neutral, leaning white-grey-red */
.overlay-email {
	background: linear-gradient(
		135deg,
		var(--color-grey-a),
		var(--color-red-gray50),
		var(--color-coal-a)
	);
}

/* ERROR: strong red-black alert */
.overlay-error {
	background: linear-gradient(
		135deg,
		var(--color-light-a),
		var(--color),
		var(--color-coal-a)
	);
}

/* fade transition */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
