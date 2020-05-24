import { Configuration } from '@nuxt/types'
import { ISitemapItemOptionsLoose, EnumChangefreq, ILinkItem } from 'sitemap'
import readingTime from 'reading-time'
// @ts-ignore
import colors from '@tailwindcss/ui/colors'
// @ts-ignore
import { $content } from '@nuxt/content'

import pkg from './package.json'
import { ampify } from './utils/ampify'
import { BlogPostParsed } from './interfaces'

const isProd = process.env.NODE_ENV === 'production'
const gaTrackingID = process.env.GA_TRACKING_ID || 'UA-XXXXXXXXX-Y'
const title = 'Julio Marquez'
const description = 'Developer, Entrepreneur & Coffee lover'
const mainColor = colors['cool-gray'][900]
const secondColor = '#fff'
const baseURL = isProd ? 'https://marquez.co' : 'http://localhost:3000'
const builtAt = new Date().toISOString()
const commitSha =
  process.env.VERCEL_GITHUB_COMMIT_SHA || String(new Date().getTime())
const buildCode = `${pkg.version}-${commitSha.substring(0, 7)}`
const isPreview = process.env.VERCEL_GITHUB_COMMIT_REF !== 'master'
const environment = isProd
  ? `${isPreview ? 'preview' : 'production'}`
  : 'development'

// TODO: remove when types get updated
interface NuxtConfiguration extends Configuration {
  components?: any
  export: Configuration['generate']

  hooks: Configuration['hooks'] & {
    'content:file:beforeInsert'?(document: BlogPostParsed): void
  }
}

const config: NuxtConfiguration = {
  mode: 'universal',
  target: 'static',

  components: {
    dirs: [
      { path: '~/components', pattern: '*.vue' },
      {
        path: '~/components/blog/',
        prefix: 'blog',
        pattern: '*.vue',
      },
    ],
  },

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

      {
        name: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      { name: 'twitter:site', property: 'twitter:site', content: '@juliomrqz' },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:updated_time',
        name: 'og:updated_time',
        property: 'og:updated_time',
        content: builtAt,
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
    ],
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#',
    },
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
    '~/assets/css/svg-icon.css',
    '~/assets/inter/inter.css',
    '~/assets/css/main.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-svgicon',
    '~/plugins/vue-lazyload',
    '~/plugins/global-components',
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
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
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    '@nuxt/content',
    '@nuxtjs/amp',
    [
      'nuxt-vitals',
      {
        trackingID: gaTrackingID,
        debug: !isProd,
      },
    ],
    ['vue-scrollto/nuxt', { offset: -40 }],
    '@nuxtjs/sentry',
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
    '@nuxtjs/google-analytics',
  ],

  /*
   ** Build configuration
   */
  build: {
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
    templates: [
      {
        src: './templates/netlify-cms-config.yml.tpl',
        dst: '../static/admin/config.yml',
        options: {
          isProd,
          baseURL,
        },
      },
    ],
  },

  /*
   ** Router
   */
  router: {
    linkActiveClass: 'text-gray-900 dark:text-gray-100',
  },

  /*
   ** Export Configuration
   */
  export: {
    fallback: '404.html',
    async routes() {
      const routes: string[] = ['/', '/about', '/projects', '/blog']

      // other routes
      routes.forEach((route) => {
        const postFix = route === '/' ? '' : route

        routes.push(`/amp${postFix}`)

        routes.push(`/es${postFix}`)
        routes.push(`/amp/es${postFix}`)
      })

      // blog routes
      const blogIndex: { slug: string }[] = await $content('blog', 'en')
        .only(['slug'])
        .fetch()

      blogIndex.forEach((route) => {
        routes.push(`/amp/blog/${route.slug}`)
        routes.push(`/amp/es/blog/${route.slug}`)
      })

      return routes
    },
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
      runtimeCaching: [
        { urlPattern: 'https://cdn.jsdelivr.net/.*', handler: 'cacheFirst' },
        {
          urlPattern: 'https://render.githubusercontent.com/render/math.*',
          handler: 'cacheFirst',
          strategyOptions: {
            cacheExpiration: {
              maxAgeSeconds: 2592000,
            },
          },
        },
      ],
    },
  },

  /*
   ** Google Analytics configuration
   */
  googleAnalytics: {
    id: gaTrackingID,
    debug: isProd ? {} : { enabled: true, sendHitTask: true },
  },

  /*
   ** Sitemap configuration
   */
  sitemap: {
    hostname: baseURL,
    exclude: ['/amp/**'],
    i18n: 'en',
    defaults: {
      changefreq: EnumChangefreq.WEEKLY,
      priority: 0.7,
      lastmod: new Date(),
    },
    async routes() {
      const websitePages = ['', 'about', 'projects', 'blog']
      const routesEn: ISitemapItemOptionsLoose[] = []
      const routesEs: ISitemapItemOptionsLoose[] = []

      function getI18nLinks(route: string): ILinkItem[] {
        return [
          { lang: 'en', url: `${baseURL}${route}` },
          { lang: 'es', url: `${baseURL}/es${route}` },
        ]
      }

      // Generate Website routes
      websitePages.forEach((page) => {
        routesEn.push({
          url: `/${page}`,
          ampLink: `${baseURL}${page === '' ? '/amp' : `/amp/${page}`}`,
          links: getI18nLinks(`/${page}`),
        })
      })

      // Generate from Blog Posts
      try {
        const blogIndex: {
          slug: string
          updatedAt: string
        }[] = await $content('blog', 'en').only(['slug', 'updatedAt']).fetch()

        blogIndex.map((slug) => {
          routesEn.push({
            url: `/blog/${slug.slug}`,
            changefreq: EnumChangefreq.DAILY,
            priority: 0.7,
            lastmodISO: new Date(slug.updatedAt).toISOString(),
            ampLink: `${baseURL}/amp/blog/${slug.slug}`,
            links: getI18nLinks(`/blog/${slug.slug}`),
          })
        })
      } catch (error) {
        throw new Error(error)
      }

      // Generate Spanish Version
      routesEn.forEach((route) => {
        routesEs.push({
          ...route,
          url: `/es${route.url}`,
          ampLink: `${baseURL}/amp/es${route.url === '/' ? '' : route.url}`,
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

  colorMode: {
    preference: 'light', // disable system
  },

  hooks: {
    // This hook is called before serving the html to the browser
    render: {
      route: async (url, page) => {
        if (/^\/amp\//gi.test(url)) {
          page.html = await ampify(!isProd, page.html)
        }
      },
    },
    generate: {
      page: async (page) => {
        if (/^\/amp\//gi.test(page.path)) {
          page.html = await ampify(!isProd, page.html)
        }
      },
    },
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { minutes } = readingTime(document.text)

        document.readingTime = minutes
      }
    },
  },

  amp: {
    origin: baseURL,
  },

  sentry: {
    config: {
      environment,
      release: buildCode,
      tags: {
        version: buildCode,
      },
      whitelistUrls: [
        new RegExp(baseURL.replace(new RegExp('^(https?://)'), '')),
        new RegExp(
          `${process.env.VERCEL_URL}`.replace(new RegExp('^(https?://)'), '')
        ),
      ],
    },
    disableServerRelease: true,
    webpackConfig: {
      debug: !isProd,
      release: buildCode,
      setCommits: {
        repo: process.env.VERCEL_GITHUB_REPO,
        commit: commitSha,
      },
    },
  },

  content: {
    markdown: {
      prism: {
        theme: '~/assets/css/prism-theme.css',
      },
    },
  },

  serverMiddleware: [
    { path: '/api/cms/auth', handler: '~/api/_dev/cms/auth.js' },
    { path: '/api/cms/complete', handler: '~/api/_dev/cms/complete.js' },
  ],
}

export default config
