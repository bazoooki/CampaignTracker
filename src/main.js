// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'Vuetify'
import VueWorldMap from 'vue-world-map'
import FlagIcon from 'vue-flag-icon'

Vue.use(VueWorldMap)
Vue.use(FlagIcon)

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#272b37',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
