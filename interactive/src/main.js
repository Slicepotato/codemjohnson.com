import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "@/assets/scss/style.scss";

library.add(faUserSecret)
library.add(faFontAwesome)

Vue.component('fa', FontAwesomeIcon)

Vue.use(VueResource);

Vue.http.options.root = 'http://wp.codemjohnson.com/wp-json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
