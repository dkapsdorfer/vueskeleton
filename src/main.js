// Import System requirements
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import VueI18n from 'vue-i18n'
import VueCookies from 'vue-cookies'
import VueLodash from 'vue-lodash'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/src/icons.scss'

// Import Helpers for filters
import { domain, count, toString, prettyDateTime, prettyDate, prettyTime, truncate,
  formatNumber, formatMilliseconds } from './filters'

// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('toString', toString)
Vue.filter('domain', domain)
Vue.filter('prettyDateTime', prettyDateTime)
Vue.filter('prettyDate', prettyDate)
Vue.filter('prettyTime', prettyTime)
Vue.filter('truncate', truncate)
Vue.filter('formatNumber', formatNumber)
Vue.filter('formatMilliseconds', formatMilliseconds)

// import Translation messages
import messages from './i18n/messages'

Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VueI18n)
Vue.use(VueCookies)
Vue.use(VueLodash)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

sync(store, router)

Vue.config.productionTip = false

// Create VueI18n instance with options
let language = window.localStorage.getItem('lang')
if (!language) {
  language = 'sk'
}
const i18n = new VueI18n({
  locale: language, // set locale
  messages
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
