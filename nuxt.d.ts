import { Context } from '@nuxt/types'

import { BlogClient } from './modules/blog/interfaces'

interface ColorMode {
  preference: 'system' | 'light' | 'dark'
  readonly value: 'system' | 'light' | 'dark'
  unknown?: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $blog: BlogClient
    $isAMP?: boolean
    $colorMode: ColorMode
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    amp?: 'only' | 'hybrid' | boolean
    ampLayout?: ((ctx: Context) => string) | string
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $blog: BlogClient
    $isAMP?: boolean
    $colorMode: ColorMode
  }
}
