<template>
  <article
    class="mx-auto max-w-3xl pt-16 pb-20 px-5 md:px-0 lg:pt-24 lg:pb-18"
    itemscope
    itemtype="http://schema.org/BlogPosting"
  >
    <LazyHydrate ssr-only>
      <div>
        <meta itemprop="dateCreated" :content="post.created" />
        <meta itemprop="datePublished" :content="post.published" />
        <meta itemprop="dateModified" :content="post.modified" />
        <meta itemprop="description" :content="post.description" />
        <meta itemprop="timeRequired" :content="`PT${post.readingTime}M`" />
        <meta itemprop="inLanguage" :content="$i18n.locale" />
        <meta
          itemprop="mainEntityOfPage"
          :content="`https://marquez.co${localePath({
            name: 'blog-slug',
            params: { slug: post.slug },
          })}`"
        />

        <div
          itemscope
          itemprop="image"
          itemtype="http://schema.org/ImageObject"
        >
          <meta
            itemprop="url"
            :content="require(`~/assets/images/blog/${post.slug}/cover.jpg`)"
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
            class="font-open-sans text-2xl leading-7 font-bold dark:text-gray-100 mb-8 md:text-3xl"
          >
            {{ post.title }}
          </h1>

          <div class="flex flex-wrap">
            <div class="flex items-center pr-5 mr-5 mb-4">
              <ImageResponsive
                :width="48"
                :height="48"
                :rounded="true"
                :source="
                  require('~/assets/images/profile.jpg?resize&sizes=144')
                "
                amp-layout="fixed"
                alt="Julio Márquez"
                classes="w-12 h-12 border border-gray-300"
              />
              <div class="flex flex-col leading-tight ml-3">
                <span class="font-medium dark:text-gray-100"
                  >Julio Márquez</span
                >
                <time
                  :datetime="post.published"
                  class="text-sm text-gray-600 dark:text-gray-300"
                >
                  {{ formatDate(post.published) }}
                </time>
              </div>
            </div>
          </div>
        </div>

        <div itemprop="description" class="text-xl mb-8 mt-4">
          {{ post.description }}
        </div>

        <div class="-mx-6 mb-8 md:mx-0">
          <ImageResponsive
            :source="
              require(`~/assets/images/blog/${post.slug}/cover.jpg?resize&sizes[]=800&sizes[]=1200`)
            "
            :width="1200 / 1.5"
            :height="630 / 1.5"
            :alt="post.title"
            class="md:shadow-lg md:rounded-lg"
            classes="w-full md:rounded-lg"
          />
        </div>

        <NuxtContent
          :document="post"
          itemprop="articleBody"
          class="markdown-body"
        />

        <aside
          v-if="post.canonical"
          class="mb-12 mt-8 py-4 border-t border-grey-600 text-base"
        >
          {{ $t('blog.publishedAt') }}

          <a
            :href="`${post.canonical}?ref=marquez-blog`"
            target="_blank"
            rel="noopener noreferrer"
            class="underline text-blue-600 dark:text-blue-400"
            >{{ getDomain(post.canonical) }}</a
          >

          {{ $t('blog.on') }} {{ formatDate(post.created) }}.
        </aside>
      </div>
    </LazyHydrate>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import Url from 'url-parse'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

import SeoHead from '~/components/mixins/SeoHead'
import FormatDate from '~/components/mixins/FormatDate'

import { BlogPostContent } from '~/interfaces'

interface Data {
  html: string
  attributes: { [key: string]: any }
  head: MetaInfo
}

export default Vue.extend({
  mixins: [SeoHead, FormatDate],
  async asyncData({ app, params, $sentry, $content }) {
    try {
      const { slug } = params
      const post: BlogPostContent = await $content(
        'blog',
        app.i18n.locale,
        slug
      ).fetch()

      const title = `${post.title} - Blog`
      const {
        description,
        canonical,
        created,
        modified,
        published,
        // wordCount,
        noindex,
      } = post

      const postUrl = app.localePath({ name: 'blog-slug', params: { slug } })
      const postAbsoluteUrl = `${process.env.baseHost}${postUrl}`

      const image = require(`~/assets/images/blog/${slug}/cover.jpg`)

      return {
        post,
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
    } catch (error) {
      $sentry.captureException(error)
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
  async validate({ params, app, $content }) {
    const { slug } = params

    if (isAlphanumeric(slug.replace(/-/g, ''))) {
      const posts: BlogPostContent[] = await $content('blog', app.i18n.locale)
        .only(['slug'])
        .fetch()
      const slugs = posts.map((p) => p.slug)

      return slugs.includes(slug)
    } else {
      return false
    }
  },
})
</script>
