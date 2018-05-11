import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Rooms from '@/components/Rooms'
import Navbar from '@/components/Navbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/rooms',
      name: 'Rooms',
      components: {
        default: Rooms,
        navbar: Navbar
      }
    }
  ]
})
