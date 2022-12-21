import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'
import animate from 'animate.css'
import {WOW} from 'wowjs'


Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(animate)
Vue.prototype.$wow = new WOW({
  live:false,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
