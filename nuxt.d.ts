import { Context } from '@nuxt/types'

interface ColorMode {
  preference: 'system' | 'light' | 'dark'
  readonly value: 'system' | 'light' | 'dark'
  unknown?: boolean
}

declare module 'vue/types/vue' {
  interface Vue {
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
    $isAMP?: boolean
    $colorMode: ColorMode
  }

  interface Context {
    // TODO: change when types get ready
    $content: any
  }
}
