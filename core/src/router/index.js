import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import compHeader from '@/components/admin/layout/compHeader'
import compSideBar from '@/components/admin/layout/compSideBar'
import compFooter from '@/components/admin/layout/compFooter'
import compLogin from '@/components/admin/account/compLogin'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: 'login', component: compLogin },
    { path: '/',
      name: 'homepage',
      components: {
        default: HelloWorld,
        'comp-header': compHeader,
        'comp-side-bar': compSideBar,
        'comp-footer': compFooter
      }
    }
    // otherwise redirect to home
    //  { path: '*', redirect: '/' }
  ]
})
