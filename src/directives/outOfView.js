export default {
	mounted(el, binding) {
		const checkVisibility = () => {
			const style = getComputedStyle(el)
			return style.visibility !== 'hidden' && el.offsetParent !== null
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting && checkVisibility()) {
					binding.value()
				}
			},
			{
				threshold: 0,
			}
		)

		observer.observe(el)
		el._observer = observer
	},

	updated(el) {
		// Force reobserve in case v-show changes
		el._observer?.unobserve(el)
		el._observer?.observe(el)
	},

	unmounted(el) {
		el._observer?.disconnect()
		delete el._observer
	},
}
