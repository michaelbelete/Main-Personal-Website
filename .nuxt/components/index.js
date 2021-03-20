export { default as Footer } from '../../components/footer.vue'
export { default as MyNav } from '../../components/myNav.vue'
export { default as Navbar } from '../../components/navbar.vue'

export const LazyFooter = import('../../components/footer.vue' /* webpackChunkName: "components/footer" */).then(c => c.default || c)
export const LazyMyNav = import('../../components/myNav.vue' /* webpackChunkName: "components/my-nav" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
