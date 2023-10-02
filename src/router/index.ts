import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import ProductListView from '../views/ProductListView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/products',
    name: 'ProductListView',
    component: ProductListView
  },
  {
    path: '/products/:id',
    name: 'ProductDetailView',
    component: ProductDetailView,
    props: true
  },
  {
    path: '/cart',
    name: 'CartView',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router