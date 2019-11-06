import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import List from './views/list.vue'
import Detail from './views/detail.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail,
    },
  ],
})

export default router