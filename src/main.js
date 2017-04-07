import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'

window.$ = jQuery
window.jQuery = jQuery
require('./makeItRain')

window.VueEvent = new Vue()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
