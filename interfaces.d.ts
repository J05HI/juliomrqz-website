import { Node } from 'unist'

export interface BlogPostIndex {
  slug: string
  title: string
  description: string
  published: Date
}

export interface BlogPostContent extends BlogPostIndex {
  created: Date
  canonical?: string
  slug: string
  cover: string
  noindex?: boolean

  // @nuxt/content
  toc: { id: string; depgth: number; text: string }[]
  body: Node
  dir: string
  path: string
  extension: string
  updatedAt: Date

  // extra
  readingTime?: number
}

export interface BlogPostParsed extends BlogPostContent {
  text: string
}
