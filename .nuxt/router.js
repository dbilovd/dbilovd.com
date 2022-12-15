import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39e818d5 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _77431491 = () => interopDefault(import('../pages/freely-given.vue' /* webpackChunkName: "pages/freely-given" */))
const _6da41637 = () => interopDefault(import('../pages/releases/index.vue' /* webpackChunkName: "pages/releases/index" */))
const _27f37495 = () => interopDefault(import('../pages/updates/index.vue' /* webpackChunkName: "pages/updates/index" */))
const _629ea1d7 = () => interopDefault(import('../pages/releases/singles/_release.vue' /* webpackChunkName: "pages/releases/singles/_release" */))
const _263cd34d = () => interopDefault(import('../pages/updates/_slug.vue' /* webpackChunkName: "pages/updates/_slug" */))
const _599ff39a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _39e818d5,
    name: "about"
  }, {
    path: "/freely-given",
    component: _77431491,
    name: "freely-given"
  }, {
    path: "/releases",
    component: _6da41637,
    name: "releases"
  }, {
    path: "/updates",
    component: _27f37495,
    name: "updates"
  }, {
    path: "/releases/singles/:release?",
    component: _629ea1d7,
    name: "releases-singles-release"
  }, {
    path: "/updates/:slug",
    component: _263cd34d,
    name: "updates-slug"
  }, {
    path: "/",
    component: _599ff39a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
