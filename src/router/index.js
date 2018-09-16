import Vue from 'vue'
import Router from 'vue-router'
import Curriculum from '@/components/Curriculum'
import Main from '@/components/Main'
import Contact from '@/components/Contact'
import Privacy from '@/components/Privacy'
import Imprint from '@/components/Imprint'
import Technical from '@/components/Technical'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/cv',
      name: 'Curriculum',
      component: Curriculum
    },
    {
      path: '/contact',
      name: "Contact",
      component: Contact
    },
    {
      path: '/privacy',
      name: "Privacy",
      component: Privacy
    },
    {
      path: '/imprint',
      name: "Imprint",
      component: Imprint
    },
    {
      path: '/technical',
      name: "Technical",
      component: Technical
    }
  ]
})
