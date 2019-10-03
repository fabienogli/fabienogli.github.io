import Vue from 'vue'
import Router from 'vue-router'
import Projects from '@/components/Projects'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
  ]
})
