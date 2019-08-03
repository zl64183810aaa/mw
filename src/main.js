import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MyHeader from './components/MyHeader.vue'
import MyHeaderCopy from './components/MyHeader copy.vue'
import MyFooter from './components/MyFooter.vue'
import Carousel from './components/Carousel.vue'


Vue.prototype.axios=axios
Vue.component("my-header",MyHeader)
Vue.component("my-headerc",MyHeaderCopy)
Vue.component("my-footer",MyFooter)
Vue.component("carousel",Carousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
