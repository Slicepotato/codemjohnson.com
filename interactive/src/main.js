import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faChevronLeft, faChevronRight, faExternalLinkAlt, faStopCircle, faPlayCircle, faLink, faAngleUp } from '@fortawesome/free-solid-svg-icons'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import "@/assets/scss/style.scss";

library.add(faCalendar, faChevronLeft, faChevronRight, faExternalLinkAlt, faStopCircle, faPlayCircle, faLink, faAngleUp)

Vue.component('fa', FontAwesomeIcon)

// Usage -----
// <fa icon="user-secret" />

Vue.use(VueResource);

Vue.http.options.root = 'https://wp.codemjohnson.com/wp-json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
