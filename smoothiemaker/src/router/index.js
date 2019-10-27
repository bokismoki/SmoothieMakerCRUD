import Vue from 'vue'
import VueRouter from 'vue-router'
import Smoothies from '../views/Smoothies.vue'
import AddSmoothie from '../views/AddSmoothie.vue'
import EditSmoothie from '../views/EditSmoothie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'smoothies',
    component: Smoothies
  },
  {
    path: '/add-smoothie',
    name: 'addSmoothie',
    component: AddSmoothie
  },
  {
    path: '/edit-smoothie/:id',
    name: 'EditSmoothies',
    component: EditSmoothie
  }

]

const router = new VueRouter({
  routes
})

export default router
