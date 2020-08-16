import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  // },
  // {
  //   path: '/reponse',
  //   name: 'Reponse',
  //   meta: {requiresAuth: true},
  //   component: () => import(/* webpackChunkName: "reponse" */ '../views/Reponse.vue')
  // },
  {
    path: '*',
    name: 'Error',
    component: () => import(/* webpackChunkName: "Error" */ '../views/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    next({
      name: 'Contact'
    })
  }else{
    next();
  }
})

export default router
