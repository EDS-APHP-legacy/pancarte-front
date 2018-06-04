import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Rooms from '@/components/Rooms'
import Room from '@/components/Room'
import Navbar from '@/components/Navbar'
import RoomPreview from '@/components/RoomPreview'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      navbar: Navbar
    }
  },
  {
    path: '/rooms',
    name: 'Rooms',
    components: {
      default: Rooms,
      room: Room,
      navbar: Navbar,
      RoomPreview: RoomPreview
    }
  },
  {
    path: '/rooms/:sector/:room',
    name: 'Room',
    components: {
      default: Room,
      navbar: Navbar
    }
  }
  ]
})
