import 'intersection-observer'
import Vue from 'vue'
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration'
import BlogImage from '~/components/blog/Image.vue'

Vue.component('LazyHydrate', LazyHydrate)

// TODO: https://github.com/nuxt/content/issues/22
Vue.component('BlogImage', BlogImage)
