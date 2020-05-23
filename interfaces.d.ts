import { Node } from 'unist'

export interface BlogPostIndex {
  slug: string
  title: string
  description: string
  published: string
}

export interface BlogPostContent extends BlogPostIndex {
  created: string
  modified: string
  canonical?: string
  noindex?: boolean

  // @nuxt/content
  toc: { id: string; depgth: number; text: string }[]
  body: Node
  dir: string
  path: string
  extension: string
  updatedAt: string

  // extra
  readingTime?: number
}

export interface BlogPostParsed extends BlogPostContent {
  text: string
}
