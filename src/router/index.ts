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
import Notify from '../views/Notify.vue'
import AssetsManagement from '../views/AssetsManagement.vue'
import Login from '../views/Login.vue'
import UserInfo from '../views/access/UserInfo.vue'
import AddUser from '../views/access/AddUser.vue'
import DevicesInfo from '../views/assets/DevicesInfo.vue'
import AddDevice from '../views/assets/AddDevice.vue'
import UseRecords from '../views/assets/UseRecords.vue'

import NotifyAxosCard from '../views/notify/NotifyAxosCard.vue'
import NotifyAxosModule from '../views/notify/NotifyAxosModule.vue'
import NotifyAxosOnt from '../views/notify/NotifyAxosOnt.vue'
import NotifyExaCard from '../views/notify/NotifyExaCard.vue'
import NotifyExaOnt from '../views/notify/NotifyExaOnt.vue'
import NotifyExaModule from '../views/notify/NotifyExaModule.vue'

import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'AxosCard',
    component: AxosCard,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },
  {
    path: '/axoscard',
    name: 'AxosCard',
    component: AxosCard,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },
  {
    path: '/exacard',
    name: 'E7Card',
    component: E7Card,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/exaont',
    name: 'E7Ont',
    component: E7Ont,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/axosont',
    name: 'AxosOnt',
    component: AxosOnt,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/axosmodule',
    name: 'AxosModule',
    component: AxosModule,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/examodule',
    name: 'ExaModule',
    component: ExaModule,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/xcommand',
    name: 'Xcommand',
    component: XCommand,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/ontdiag',
    name: 'OntDiag',
    component: OntDiag,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/topo',
    name: 'topo',
    component: Topo,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/assetsmanagement',
    name: 'AssetsManagement',
    component: AssetsManagement,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      keepAlive: false// 导航栏在该页面不予显示
    }
  },

  {
    path: '/UserInfo',
    name: 'userinfo',
    component: UserInfo,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/AddUser',
    name: 'adduser',
    component: AddUser,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/DevicesInfo',
    name: 'devicesinfo',
    component: DevicesInfo,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/AddDevice',
    name: 'adddevice',
    component: AddDevice,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/UseRecords',
    name: 'userecords',
    component: UseRecords,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/Notify',
    name: 'notify',
    component: Notify,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/NotifyAxosCard',
    name: 'notifyaxoscard',
    component: NotifyAxosCard,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/NotifyAxosModule',
    name: 'notifyaxosmodule',
    component: NotifyAxosModule,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/NotifyAxosOnt',
    name: 'notifyaxosont',
    component: NotifyAxosOnt,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/NotifyExaOnt',
    name: 'notifyexaont',
    component: NotifyExaOnt,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/NotifyExaCard',
    name: 'notifyexacard',
    component: NotifyExaCard,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
  },

  {
    path: '/NotifyExaModule',
    name: 'notifyexamodule',
    component: NotifyExaCard,
    meta: {
      keepAlive: true// 导航栏在该页面显示
    }
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
