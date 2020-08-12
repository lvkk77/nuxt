import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71adc82e = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _659b32e3 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _4e0371e5 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _97d545b6 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5fd65827 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _65deee71 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _ca40bf1c = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _71adc82e,
    children: [{
      path: "",
      component: _659b32e3,
      name: "home"
    }, {
      path: "/login",
      component: _4e0371e5,
      name: "login"
    }, {
      path: "/register",
      component: _4e0371e5,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _97d545b6,
      name: "profile"
    }, {
      path: "/settings",
      component: _5fd65827,
      name: "settings"
    }, {
      path: "/editor",
      component: _65deee71,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ca40bf1c,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
