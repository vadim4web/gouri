# 🌐 GOURI — Юридичний супровід у Польщі

**[➡ Відкрити сайт](http://gouri.com.pl/)**  
Професійна допомога українцям у Польщі: легалізація, юридичні консультації, переклади та супровід.

---

## 🚀 Оптимізація сайту

| Десктоп | Мобільна версія |
|--------|-----------------|
| ![desktop](docs/desktop.png) | ![mobile](docs/mobile.png) |

---

## 🖼️ Інтерфейс сайту

| Скриншот сайту (портрет) | Альтернативний |
|--------------------------|----------------|
| ![portrait](docs/portrait.png) | ![portrait_](docs/portrait_.png) |

---

## ⚙️ Технології

- **Vue 3** (Composition API)
- **Vite** — швидкий білд
- **Vue I18n** — локалізація
- **SASS** — стилі
- **EmailJS** — форма зворотного зв’язку
- **Critical CSS** — оптимізація First Contentful Paint
- **GitHub Pages** — деплой

---

## 📁 Структура проєкту

<details>
<summary>📂 <code>src/</code></summary>

```txt
App.vue              # Основний layout з усіма секціями
components/          # Всі секції сторінки (Hero, About, FAQ тощо)
directives/          # Кастомні директиви
i18n/                # Файли локалізації
assets/              # Зображення та ресурси
style.css            # Глобальні стилі
```
</details>

---

## 🚀 Команди для розробки

```bash
# Встановлення залежностей
npm install

# Запуск дев-сервера
npm run dev

# Збірка у production
npm run build

# Публікація на GitHub Pages
npm run deploy
```

---

## 🧰 Корисні скрипти

```bash
# Prettier + ESLint автоформатування
npm run format

# Альтернативний predeploy (для тестів)
npm run predeploy_
```

---

## 🎯 Оптимізація PageSpeed

Проєкт використовує `rollup-plugin-critical` для автоматичної вставки critical CSS при білді:

```js
critical({
  criticalUrl: 'https://gouri.com.pl/',
  criticalBase: 'dist/',
  criticalPages: [{ uri: '', template: 'index' }],
  criticalConfig: {
    inline: true,
    extract: false,
    width: 375,
    height: 812,
    penthouse: { blockJSRequests: false },
  },
})
```

Це знижує **Time to First Paint** і підвищує **PageSpeed Score**.

---

## 📬 Контакти

**Email:** gouri@wp.pl  
**Телефон:** +48 79 333 7695  
**Адреса:** Gdańska 117/3D, 85-022 Bydgoszcz, Poland  
**Соцмережі:** Facebook, Instagram, WhatsApp, Telegram

---

## 📄 Ліцензія

Приватний проєкт. Усі права захищено © 2018–2025

---
