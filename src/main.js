import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'
import 'amfe-flexible'
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
  render: h => h(App)
})
  // .$mount('#app-box')
