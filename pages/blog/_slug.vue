<template>
  <article
    class="mx-auto max-w-3xl pt-16 pb-20 px-5 md:px-0 lg:pt-24 lg:pb-18"
    itemscope
    itemtype="http://schema.org/BlogPosting"
  >
    <LazyHydrate ssr-only>
      <div>
        <meta itemprop="dateCreated" :content="attributes.created" />
        <meta itemprop="datePublished" :content="attributes.published" />
        <meta itemprop="dateModified" :content="attributes.modified" />
        <meta itemprop="description" :content="attributes.description" />
        <meta itemprop="inLanguage" :content="$i18n.locale" />
        <meta
          itemprop="mainEntityOfPage"
          :content="`https://marquez.co${localePath({
            name: 'blog-slug',
            params: { slug: attributes.slug },
          })}`"
        />

        <div
          itemscope
          itemprop="image"
          itemtype="http://schema.org/ImageObject"
        >
          <meta
            itemprop="url"
            :content="
              require(`~/assets/images/blog/${attributes.slug}/cover.jpg`)
            "
          />
          <meta itemprop="width" content="1200px" />
          <meta itemprop="height" content="630px" />
        </div>
        <div itemscope itemprop="author" itemtype="http://schema.org/Person">
          <meta itemprop="name" content="Julio Márquez" />
        </div>
        <meta itemprop="copyrightYear" :content="new Date().getFullYear()" />
        <div
          v-for="prop in ['publisher', 'copyrightHolder', 'contributor']"
          :key="prop"
          itemscope
          :itemprop="prop"
          itemtype="http://schema.org/Organization"
        >
          <meta itemprop="legalName" content="Julio Márquez" />
          <meta itemprop="name" content="Julio Márquez" />
          <meta itemprop="url" content="https://marquez.co" />
          <div
            itemscope
            itemprop="logo"
            itemtype="http://schema.org/ImageObject"
          >
            <meta
              itemprop="url"
              content="https://mauferzone.com/static/icon.png"
            />
            <meta itemprop="width" content="512px" />
            <meta itemprop="height" content="512px" />
          </div>
        </div>
      </div>
    </LazyHydrate>

    <LazyHydrate when-idle>
      <div>
        <div class="pb-4">
          <h1
            itemprop="name headline"
            class="font-open-sans text-2xl leading-7 font-bold text-gray-900 mb-8 md:text-3xl"
          >
            {{ attributes.title }}
          </h1>

          <div class="flex flex-wrap">
            <div class="flex items-center pr-5 mr-5 mb-4">
              <ImageResponsive
                :width="48"
                :height="48"
                :rounded="true"
                source="https://github.com/juliomrqz.png"
                alt="Julio Márquez"
                classes="w-12 h-12"
              />
              <div class="flex flex-col leading-tight ml-3">
                <span class="font-medium text-gray-900">Julio Márquez</span>
                <time
                  :datetime="attributes.published"
                  class="text-sm text-gray-600"
                >
                  {{ formatDate(attributes.published) }}
                </time>
              </div>
            </div>
          </div>
        </div>

        <div itemprop="description" class="text-xl mb-8 mt-4">
          {{ attributes.description }}
        </div>

        <div class="-mx-6 mb-8 md:mx-0">
          <ImageResponsive
            :source="
              require(`~/assets/images/blog/${attributes.slug}/cover.jpg?resize&sizes[]=800&sizes[]=1200`)
            "
            :width="1200 / 1.5"
            :height="630 / 1.5"
            :alt="attributes.title"
            class="md:shadow-lg md:rounded-lg"
            classes="w-full md:rounded-lg"
          />
        </div>

        <ArticleContent itemprop="articleBody" />

        <div
          v-if="attributes.canonical"
          class="mb-12 mt-8 py-4 border-t border-grey-600 text-base"
        >
          {{ $t('blog.publishedAt') }}

          <a
            :href="`${attributes.canonical}?ref=marquez-blog`"
            target="_blank"
            rel="noopener noreferrer"
            class="underline text-blue-600"
            >{{ getDomain(attributes.canonical) }}</a
          >

          {{ $t('blog.on') }} {{ formatDate(attributes.created) }}.
        </div>
      </div>
    </LazyHydrate>

    <MathJax v-if="includeMathJax" />
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
// @ts-ignore
import Url from 'url-parse'

import ArticleContent from '~/components/blog/ArticleContent.vue'
import SeoHead from '~/components/mixins/SeoHead'
import FormatDate from '~/components/mixins/FormatDate'
// @ts-ignore
import MathJax from '~/components/MathJax'

interface Data {
  html: string
  attributes: { [key: string]: any }
  includeMathJax: boolean
  head: MetaInfo
}

export default Vue.extend({
  components: {
    MathJax,
    ArticleContent,
  },
  mixins: [SeoHead, FormatDate],
  async asyncData({ app, params }) {
    try {
      const { slug } = params
      const { locale } = app.i18n
      const { attributes } = await app.$blog.getArticle(slug, locale)
      const title = `${attributes.title} - Blog`
      const {
        description,
        canonical,
        created,
        modified,
        published,
        // wordCount,
        noindex,
        includeMathJax,
      } = attributes
      const postAbsoluteUrl = `${process.env.baseHost}${
        locale === 'es' ? '/es' : ''
      }/blog/${slug}`
      const image = require(`~/assets/images/blog/${slug}/cover.jpg`)

      return {
        attributes,
        includeMathJax,
        head: {
          image,
          title,
          description,
          canonical,
          created,
          modified,
          published,
          noindex,
          extraScripts: [
            {
              innerHTML: JSON.stringify({
                '@context': 'http://schema.org',
                '@type': 'BreadcrumbList',
                itemListElement: [
                  {
                    '@type': 'ListItem',
                    position: 1,
                    item: {
                      '@id': process.env.baseHost,
                      name: 'Home',
                    },
                  },
                  {
                    '@type': 'ListItem',
                    position: 2,
                    item: {
                      '@id': `${process.env.baseHost}/blog`,
                      name: 'Blog',
                    },
                  },
                  {
                    '@type': 'ListItem',
                    position: 3,
                    item: {
                      '@id': postAbsoluteUrl,
                      name: title,
                    },
                  },
                ],
              }),
              type: 'application/ld+json',
            },
          ],
        },
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.debug(err)
      return false
    }
  },
  data: () => ({
    attributes: null,
  }),
  methods: {
    getDomain(url: string) {
      const result = Url(url)
      return result.hostname
    },
  },
  validate({ params, app }) {
    return app.$blog.validate('articleSlug', params.slug)
  },
})
</script>

<style scoped>
.markdown-body {
  >>> .anchor {
    display: none;
  }
}
</style>
