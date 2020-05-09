/* eslint-disable import/no-webpack-loader-syntax */
// @ts-ignore
import firstInputDelay from '!!raw-loader!first-input-delay/dist/first-input-delay.min.js'
/* eslint-enable */

export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const head = { ...this.head }
    const extraScripts = head.extraScripts || []

    const currentAbsoluteUrl = `${process.env.baseHost}${this.$router.currentRoute.path}`
    const baseImage = require(`~/assets/images/logotype.jpg`)

    const ogImage = [
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: head.image ? head.image : baseImage,
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        property: 'og:image:width',
        content: 1200,
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        property: 'og:image:height',
        content: 630,
      },
      {
        hid: 'og:image:type',
        name: 'og:image:type',
        property: 'og:image:type',
        content: 'image/png',
      },
    ]

    const link = i18nSeo.link
    const meta = [
      {
        hid: 'description',
        name: 'description',
        content: head.description,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: head.description,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        property: 'twitter:description',
        content: head.description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: head.title,
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        property: 'twitter:title',
        content: head.title,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: currentAbsoluteUrl,
      },
      ...ogImage,
      ...i18nSeo.meta,
    ]

    if (head.modified && head.modified) {
      meta.push(
        {
          hid: 'og:type',
          name: 'og:type',
          property: 'og:type',
          content: 'article',
        },
        {
          hid: 'og:updated_time',
          name: 'og:updated_time',
          property: 'og:updated_time',
          content: head.modified,
        },
        {
          hid: 'article:modified_time',
          property: 'article:modified_time',
          content: head.modified,
        },
        {
          hid: 'article:published_time',
          property: 'article:published_time',
          content: head.published,
        },
        {
          hid: 'twitter:creator',
          name: 'twitter:creator',
          property: 'twitter:creator',
          content: '@juliomrqz',
        }
      )
    } else {
      meta.push({
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      })
    }

    if (head.noIndex) {
      meta.push({
        hid: 'robots',
        name: 'robots',
        content: 'noindex, nofollow',
      })
    }

    link.push({
      rel: 'canonical',
      href: head.canonical ? head.canonical : currentAbsoluteUrl,
      hid: 'canonical',
    })

    return {
      title: head.title,
      titleTemplate: head.titleTemplate || '%s | Julio Marquez',
      htmlAttrs: {
        ...i18nSeo.htmlAttrs,
        prefix: 'og: http://ogp.me/ns#',
      },
      meta,
      link,
      script: [
        {
          hid: 'first-input-delay-polyfill',
          innerHTML: firstInputDelay,
          type: 'text/javascript',
        },
        ...extraScripts,
      ],
      __dangerouslyDisableSanitizers: ['script'],
    }
  },
}
