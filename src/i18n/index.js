import { createI18n } from 'vue-i18n'

const messages = {
	ru: {
		services: 'услуги',
		aboutUs: 'о нас',
		contactUs: 'контакты',

		copyright: 'Все права защищены',
	},
	uk: {
		services: 'послуги',
		aboutUs: 'про нас',
		contactUs: 'контакти',

		copyright: 'Усі права захищено',
	},
}

export default createI18n({
	locale: sessionStorage.getItem('lang') || 'ru',
	fallbackLocale: 'ru',
	messages,
})