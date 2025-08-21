<template>
	<div class="language-select">
		<a
			role="button"
			:class="locale == 'uk' ? 'selected' : ''"
			@click="setLocale('uk')"
			>UK</a>
		<span style="color: var(--color-gray50)">|</span>
		<a
			role="button"
			:class="locale == 'ru' ? 'selected' : ''"
			@click="setLocale('ru')"
			>RU</a>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const setLocale = lang => {
	locale.value = lang
	document.title = t('pageTitle')
	sessionStorage.setItem('lang', lang)
}

onMounted(() => {
	const browserLang =
		sessionStorage.getItem('lang') ?
			sessionStorage.getItem('lang')
		:	navigator.language || navigator.userLanguage

	if (
		browserLang.toLowerCase().startsWith('uk') ||
		browserLang.toLowerCase().startsWith('ua')
	) {
		setLocale('uk')
	}
})
</script>

<style lang="scss" scoped>
.language-select {
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	gap: 0.25rem;
	padding: 1rem;
	width: 100%;

	:not(.selected) {
		color: var(--color-gray);
	}

	a:hover {
		color: var(--color);
	}
}
</style>
