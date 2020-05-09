import { Plugin } from '@nuxt/types'

import { blogClient } from './client'

const blogPlugin: Plugin = (_, inject) => {
  inject('blog', blogClient)
}

export default blogPlugin
