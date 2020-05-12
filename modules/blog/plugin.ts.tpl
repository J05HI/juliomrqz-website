import { Plugin } from '@nuxt/types'
import isAlphanumeric from 'validator/lib/isAlphanumeric'

import { MarkdownContent, BlogClient } from '~/modules/blog/interfaces'

const blogSlugs: string[] = <%= serialize(options.slugs) %>;

const getContent = async (
  slug: string,
  lang: string
): Promise<MarkdownContent> =>
  /* eslint-disable no-return-await */
  await import(
    /* webpackChunkName: "blog-[request]" */ `~/content/blog/${lang}/${slug}.md`
  )

export const blogClient: BlogClient = {
  async getArticles(lang: string) {
    const articles = await import(
      /* webpackChunkName: "blog-index-[request]" */ `./index-${lang}`
    )

    return articles.index
  },
  async getArticle(slug: string, lang: string): Promise<MarkdownContent> {
    const content = await getContent(slug, lang)
    content.attributes.author = 'Julio Marquez'

    return content
  },
  validate(key: string, data: string): boolean {
    const _isAlphanumeric = (data: string) =>
      isAlphanumeric(data.replace(/-/g, ''))
    let isValid = false

    if (key === 'articleSlug') {
      isValid = blogSlugs.includes(data) && _isAlphanumeric(data)
    }

    return isValid
  },
}

const blogPlugin: Plugin = (_, inject) => {
  inject('blog', blogClient)
}

export default blogPlugin
