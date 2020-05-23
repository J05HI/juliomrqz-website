import 'intersection-observer'
import Vue from 'vue'
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration'
import BlogImage from '~/components/blog/Image.vue'

Vue.component('LazyHydrate', LazyHydrate)

// TODO: for some reason, this module is not available on blog posts
// Something wrong with @nuxt/components?
Vue.component('BlogImage', BlogImage)
