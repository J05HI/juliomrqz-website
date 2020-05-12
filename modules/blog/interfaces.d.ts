import { VueConstructor } from 'vue'

export interface MarkdownContent {
  attributes: { [key: string]: string | number | boolean }
  html: string
  meta: string | boolean
  vue: {
    component: VueConstructor
  }
}

export interface PostIndex {
  slug: string
  title: string
  description: string
  published: string
}

export interface BlogClient {
  getArticles: (lang: string) => Promise<PostIndex[]>
  getArticle: (slug: string, lang: string) => Promise<MarkdownContent>
  validate: (key: string, data: string) => boolean
}
