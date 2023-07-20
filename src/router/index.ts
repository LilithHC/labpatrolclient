import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import AxosCard from '../views/AxosCard.vue'
import E7Card from '../views/E7Card.vue'
import AxosOnt from '../views/AxosOnt.vue'
import E7Ont from '../views/E7Ont.vue'
import AxosModule from '../views/AxosModule.vue'
import ExaModule from '../views/ExaModule.vue'
import XCommand from '../views/XCommand.vue'
import OntDiag from '../views/OntDiag.vue'
import Topo from '../views/Topo.vue'
import AssetsManagement from '../views/AssetsManagement.vue'
import Login from '../views/Login.vue'

import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AxosCard',
    component: AxosCard
  },
  {
    path: '/axoscard',
    name: 'AxosCard',
    component: AxosCard
  },
  {
    path: '/exacard',
    name: 'E7Card',
    component: E7Card
  },

  {
    path: '/exaont',
    name: 'E7Ont',
    component: E7Ont
  },

  {
    path: '/axosont',
    name: 'AxosOnt',
    component: AxosOnt
  },

  {
    path: '/axosmodule',
    name: 'AxosModule',
    component: AxosModule
  },

  {
    path: '/examodule',
    name: 'ExaModule',
    component: ExaModule
  },

  {
    path: '/xcommand',
    name: 'Xcommand',
    component: XCommand
  },

  {
    path: '/ontdiag',
    name: 'OntDiag',
    component: OntDiag
  },

  {
    path: '/topo',
    name: 'topo',
    component: Topo
  },

  {
    path: '/assetsmanagement',
    name: 'AssetsManagement',
    component: AssetsManagement
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
