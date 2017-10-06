import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import 'amfe-flexible'
import {store} from './store/index'
import '@/base/css/iconfont.css'
// import 'iview/dist/styles/iview.css'
import '@/base/css/cover.scss'
// import Home from './components/HelloFromVux'

// Vue.use(router)

/*
const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})
*/

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
  // .$mount('#app-box')
