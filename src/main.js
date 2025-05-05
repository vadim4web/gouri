import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import i18n from '~/i18n/'
import outOfView from '~/directives/outOfView'
import clickOutside from '~/directives/clickOutside'

createApp(App)
  .use(i18n)
  .directive('out-of-view', outOfView)
  .directive('click-outside', clickOutside)
  .mount('#app')
