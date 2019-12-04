import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
Vue.config.productionTip = false

Vue.prototype.$axios = axios;
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (window.localStorage.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          path: to.fullPath
        }
      })
    }
  } else {
    next();
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
