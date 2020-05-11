import isAlphanumeric from 'validator/lib/isAlphanumeric'

import { blogIndex } from '../../content/blog'
import BlogUtils from '../../helpers/blog'

export const blogClient = {
  async getArticles(lang: string) {
    const articles = await BlogUtils.buildArticles(lang)
    return articles
  },
  async getArticle(slug: string, lang: string) {
    const article = await BlogUtils.buildArticle(slug, lang)
    return article
  },
  validate(key: string, data: string) {
    const _isAlphanumeric = (data: string) =>
      isAlphanumeric(data.replace(/-/g, ''))
    let isValid = false

    if (key === 'articleSlug') {
      isValid = blogIndex.articles.includes(data) && _isAlphanumeric(data)
    }

    return isValid
  },
}
