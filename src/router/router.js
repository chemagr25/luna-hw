
import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Help from '../views/Help.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../shared/pages/NotFound.vue'

const routes = [
  { path: '/', component: Home},
  { path: '/login', component: Login},
  { path: '/registro', component: Register},
  { path: '/Ayuda', component: Help},
  { path: '/contactanos', component: Contact},
  { path: '/:pathMatch(.*)*',  component: NotFound },
]


const router = createRouter({

  history: createWebHashHistory(),
  routes,
})

export default router