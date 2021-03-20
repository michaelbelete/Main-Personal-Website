import Vue from 'vue'

const components = {
  Footer: () => import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c),
  MyNav: () => import('../../components/myNav.vue' /* webpackChunkName: "components/my-nav" */).then(c => c.default || c),
  Navbar: () => import('../../components/navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
