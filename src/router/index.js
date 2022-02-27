import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '@/views/login/Login.vue'
import Layout from '@/views/layout/Layout.vue'
import Home from '@/views/home/Home.vue'
import QA from '@/views/qa/QA.vue'
import Video from '@/views/video/Video.vue'
import My from '@/views/my/My.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/layout', redirect: '/layout/home' },
  { path: '/login', component: Login },
  {
    path: '/layout',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'qa', component: QA },
      { path: 'video', component: Video },
      { path: 'my', component: My }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
