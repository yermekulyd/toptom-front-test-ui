import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import 'normalize.css'

import { config } from '../config/i18n.conf'

import App from './App.vue'

const i18n = createI18n(config)

createApp(App).use(i18n).mount('#app')
