import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCalendar, faChevronLeft, faChevronRight, faExternalLinkAlt, faStopCircle, faPlayCircle, faLink, faAngleUp, faBars, faFileDownload, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faJs, faVuejs, faHtml5, faSass, faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueCodeHighlight from 'vue-code-highlight';

import "@/assets/scss/style.scss";

library.add(
  faCalendar,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faExternalLinkAlt,
  faStopCircle,
  faPlayCircle,
  faLink,
  faAngleUp,
  faJs,
  faVuejs,
  faHtml5,
  faSass,
  faCss3Alt,
  faBars,
  faFileDownload
)

Vue.component('fa', FontAwesomeIcon)

// Usage -----
// <fa icon="user-secret" />

Vue.use(VueResource,VueCodeHighlight);

Vue.http.options.root = 'https://wp.codemjohnson.com/wp-json';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
