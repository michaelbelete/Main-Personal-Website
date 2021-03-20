import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d77a5ab8 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _4d1275e4 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _159fed70 = () => interopDefault(import('../pages/experiance.vue' /* webpackChunkName: "pages/experiance" */))
const _47f194b6 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _e7468380 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _11998498 = () => interopDefault(import('../pages/*.vue' /* webpackChunkName: "pages/*" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _d77a5ab8,
    name: "blog"
  }, {
    path: "/contact",
    component: _4d1275e4,
    name: "contact"
  }, {
    path: "/experiance",
    component: _159fed70,
    name: "experiance"
  }, {
    path: "/portfolio",
    component: _47f194b6,
    name: "portfolio"
  }, {
    path: "/",
    component: _e7468380,
    name: "index"
  }, {
    path: "/*",
    component: _11998498,
    name: "*"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
