import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import UserProfile from '../components/UserProfile'
import UserPosts from '../components/UserPosts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user/:id',
    component: UserProfile
  },
  {
    path: '/user/:id/posts',
    component: UserPosts
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
