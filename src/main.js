import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({ mode: 'history', routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')