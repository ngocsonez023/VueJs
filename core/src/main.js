// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/plugins/fontawesome-free/css/all.min.css'
import './assets/dist/css/adminlte.min.css'
import './assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css'
import './assets/plugins/jquery/jquery.min.js'
import './assets/dist/js/adminlte.js'
// import './assets/plugins/jquery-ui/jquery-ui.min.js'
// import './assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js'
// import './assets/dist/js/demo.js'
import './assets/scss/style.css'
import { store } from './store/index'

Vue.config.productionTip = false
Vue.use(Antd)
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')

  if (authRequired && !loggedIn) {
    return next('/login')
  }

  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
