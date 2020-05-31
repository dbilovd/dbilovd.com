import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cbb20e46 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3b919b89 = () => interopDefault(import('../pages/freely-given.vue' /* webpackChunkName: "pages/freely-given" */))
const _586cbf2f = () => interopDefault(import('../pages/releases/index.vue' /* webpackChunkName: "pages/releases/index" */))
const _251466c6 = () => interopDefault(import('../pages/updates/index.vue' /* webpackChunkName: "pages/updates/index" */))
const _73752ddf = () => interopDefault(import('../pages/releases/singles/_release.vue' /* webpackChunkName: "pages/releases/singles/_release" */))
const _2881a956 = () => interopDefault(import('../pages/updates/_slug.vue' /* webpackChunkName: "pages/updates/_slug" */))
const _8c4258bc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _cbb20e46,
    name: "about"
  }, {
    path: "/freely-given",
    component: _3b919b89,
    name: "freely-given"
  }, {
    path: "/releases",
    component: _586cbf2f,
    name: "releases"
  }, {
    path: "/updates",
    component: _251466c6,
    name: "updates"
  }, {
    path: "/releases/singles/:release?",
    component: _73752ddf,
    name: "releases-singles-release"
  }, {
    path: "/updates/:slug",
    component: _2881a956,
    name: "updates-slug"
  }, {
    path: "/",
    component: _8c4258bc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
