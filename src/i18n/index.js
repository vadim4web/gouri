import { createI18n } from 'vue-i18n'

const messages = {
	ru: {},
	uk: {},
}

export default createI18n({
	locale: sessionStorage.getItem('lang') || 'ru',
	fallbackLocale: 'ru',
	messages,
})