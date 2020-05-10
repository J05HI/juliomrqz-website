import path from 'path'
import Mode from 'frontmatter-markdown-loader/mode'
import colors from '@tailwindcss/ui/colors'

import pkg from './package'
import BlogIndex from './content/blog'
import { renderMarkdown } from './webpack/markdown'

const isProd = process.env.NODE_ENV === 'production'
const title = 'Julio Marquez'
const description = 'Developer, Entrepreneur & Coffee lover'
const mainColor = colors['cool-gray'][900]
const secondColor = '#fff'
const baseURL = isProd ? 'https://marquez.co' : 'http://localhost:3000/'
const builtAt = new Date().toISOString()
const buildCode = `${pkg.version}-${(
  process.env.COMMIT_REF || String(new Date().getTime())
).substring(0, 7)}`

/**
 * @type { import("@nuxt/types").Configuration }
 */
const config = {
  mode: 'universal',
  /*
   ** Env Variables
   */
  env: {
    mainColor,
    secondColor,
    baseHost: baseURL,
    email: 'julio@marquez.co',
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s | Julio Marquez',
    title,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: description },
      { name: 'apple-mobile-web-app-status-bar-style', content: mainColor },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'msapplication-navbutton-color', content: mainColor },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@juliomrqz' },
      { property: 'og:updated_time', content: builtAt },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
    ],
    bodyAttrs: {
      class:
        'antialiased font-sans text-gray-900 transition-colors duration-300 ease-linear dark:bg-gray-900 dark:text-gray-300',
      id: 'marquez',
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: mainColor, height: '5px' },

  /*
   ** Global CSS
   */
  css: [
    'github-markdown-css/github-markdown.css',
    '~/assets/css/prism-theme.css',
    '~/assets/css/svg-icon.css',
    '~/assets/inter/inter.css',
    '~/assets/css/main.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/blog',
    '~/plugins/vue-svgicon',
    '~/plugins/vue-lazyload',
    '~/plugins/vue-script2',
    '~/plugins/globalComponents',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // https://nuxt-community.github.io/nuxt-i18n/
    [
      'nuxt-i18n',
      {
        baseUrl: baseURL,
        locales: [
          { code: 'en', iso: 'en-US', name: 'English', file: 'en.js' },
          { code: 'es', iso: 'es-ES', name: 'Español', file: 'es.js' },
        ],
        seo: false,
        defaultLocale: 'en',
        lazy: true,
        langDir: './locales/',
        detectBrowserLanguage: false,
        vueI18n: {
          fallbackLocale: 'en',
        },
      },
    ],
    ['vue-scrollto/nuxt', { offset: -40 }],
  ],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/color-mode',
  ],

  /*
   ** Build configuration
   */
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'content'),
        options: {
          mode: [Mode.META, Mode.VUE_COMPONENT],
          markdown: (body) => {
            return renderMarkdown(body)
          },
          vue: {
            root: 'article-content',
          },
        },
      })
    },
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-combine-duplicated-selectors': {},
      },
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          'focus-within-pseudo-class': false,
        },
      },
    },
  },

  /*
   ** Router
   */
  router: {
    linkActiveClass: 'text-gray-900 dark:text-gray-100',
  },

  /*
   ** Generate Configuration
   */
  generate: {
    fallback: '404.html',
    routes: []
      .concat(BlogIndex.articles.map((s) => `/blog/${s}`))
      .concat(BlogIndex.articles.map((s) => `/es/blog/${s}`)),
  },

  /*
   ** PWA module configuration
   */
  pwa: {
    meta: {
      mobileApp: false,
      mobileAppIOS: false,
      name: title,
      author: 'Julio Marquez',
      description,
      theme_color: mainColor,
      ogHost: baseURL,
      twitterCard: 'summary_large_image',
      twitterSite: '@juliomrqz',
    },
    manifest: {
      name: title,
      short_name: title,
      description,
      start_url: '/blog?standalone=true&utm_source=web_app&utm_medium=pwa',
      display: 'standalone',
      background_color: secondColor,
      theme_color: mainColor,
      version: buildCode,
    },
    workbox: {
      offlineAnalytics: true,
    },
  },

  /*
   ** Google Analytics configuration
   */
  'google-analytics': {
    id: process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-Y',
  },

  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: baseURL,
    routes() {
      const websitePages = ['', 'about', 'projects', 'blog']
      const routesEn = []
      const routesEs = []

      // Generate Website routes
      websitePages.forEach((page) => {
        routesEn.push({
          url: `/${page}`,
          changefreq: 'weekly',
          priority: 0.8,
          lastmodISO: new Date().toISOString(),
        })
      })

      // Generate from Blog Posts
      try {
        BlogIndex.articles.map((slug) => {
          routesEn.push({
            url: `/blog/${slug}`,
            changefreq: 'weekly',
            priority: 0.7,
            lastmodISO: new Date().toISOString(),
          })
        })
      } catch (error) {
        throw new Error(error)
      }

      // Generate Spanish Version
      routesEn.forEach((route) => {
        routesEs.push({
          ...route,
          url: `/es${route.url === '/' ? '' : route.url}`,
        })
      })

      return [...routesEn, ...routesEs]
    },
  },

  typescript: {
    typeCheck: {
      eslint: true,
    },
  },

  purgeCSS: {
    extractors: [
      {
        extractor(content) {
          return content.match(/[\w-/.:]+(?<!:)/g) || []
        },
        extensions: ['html', 'vue', 'js'],
      },
    ],
    whitelist: ['antialiased', 'font-sans', 'nuxt-progress'],
    // TODO: Improve the following definitions
    whitelistPatterns: [
      /^svg/,
      /code/,
      /pre/,
      /table$/,
      /markdown-body/,
      /* prism */
      /limit/,
      /token/,
      /language/,
      /line-numbers/,
    ],
    whitelistPatternsChildren: [
      /^svg/,
      /code/,
      /pre/,
      /table$/,
      /markdown-body/,
      /* prism */
      /limit/,
      /token/,
      /language/,
      /line-numbers/,
    ],
  },

  colorMode: {
    preference: 'light', // disable system
  },
}

export default config
