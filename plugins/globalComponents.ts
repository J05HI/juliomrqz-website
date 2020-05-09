import 'intersection-observer'
import Vue from 'vue'
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration'

import ImageResponsive from '~/components/ImageResponsive.vue'
import ImageBlog from '~/components/ImageBlog.vue'

Vue.component('LazyHydrate', LazyHydrate)
Vue.component('ImageResponsive', ImageResponsive)
Vue.component('ImageBlog', ImageBlog)
