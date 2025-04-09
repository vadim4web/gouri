import { createI18n } from 'vue-i18n'

const messages = {
	ru: {
		services: 'услуги',
		aboutUs: 'о нас',
		contactUs: 'контакты',

		copyright: 'Все права защищены',

		hero_headline1: 'Юридическая поддержка',
		hero_headline2: 'для жизни без стресса в Польше',
		hero_moto: 'Профессиональное сопровождение вашего пути к уверенности и легальности',

		emailPlaceholder: 'Введите свой email, чтобы начать',
		submitText: 'Начать',
	},
	uk: {
		services: 'послуги',
		aboutUs: 'про нас',
		contactUs: 'контакти',

		copyright: 'Усі права захищено',

		hero_headline1: 'Юридичний супровід',
		hero_headline2: 'для життя без стресу в Польщі',
		hero_moto: 'Професійний супровід вашого шляху до впевненості та легальності',

		emailPlaceholder: 'Введіть свій email, щоб почати',
		submitText: 'Почати',
	},
}

export default createI18n({
	locale: sessionStorage.getItem('lang') || 'ru',
	fallbackLocale: 'ru',
	messages,
})