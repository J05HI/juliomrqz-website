import { VueConstructor } from 'vue'
import BlogIndex from '~/content/blog'

interface MarkdownContent {
  attributes: { [key: string]: string | number | boolean }
  html: string
  meta: string | boolean
  vue: {
    component: VueConstructor
  }
}

const getContent = async (
  slug: string,
  lang: string
): Promise<MarkdownContent> =>
  /* eslint-disable no-return-await */
  await import(
    /* webpackChunkName: "blog-[request]" */ `../content/blog/${lang}/${slug}.md`
  )

const buildArticle = async (slug: string, lang = 'en') => {
  const content = await getContent(slug, lang)

  content.attributes.author = 'Julio Marquez'

  return content
}

const buildArticles = async (lang = 'en') => {
  const articles = []

  for (let i = 0; i < BlogIndex.articles.length; i++) {
    const slug = BlogIndex.articles[i]
    const article = await buildArticle(slug, lang)
    articles.push(article)
  }

  return articles
}

export default {
  buildArticle,
  buildArticles,
}
