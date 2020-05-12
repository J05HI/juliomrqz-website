import { resolve } from 'path'
import * as fs from 'fs-extra'
import frontMatter from 'front-matter'

import { Module } from '@nuxt/types'
import { PostIndex } from './interfaces'

const contentPath = resolve(__dirname, '../../content/blog')

const aceforthModule: Module = function (_) {
  const langs = ['en', 'es']
  const indexes: { [key: string]: PostIndex[] } = {}

  langs.forEach((lang) => {
    indexes[lang] = []

    const langPath = resolve(contentPath, lang)
    const files = fs.readdirSync(langPath)

    files.forEach((file) => {
      const content = fs.readFileSync(resolve(langPath, file), 'utf-8')
      const data = frontMatter<{ [key: string]: string }>(content)
      const attributes: PostIndex = {
        slug: data.attributes.slug,
        title: data.attributes.title,
        description: data.attributes.description,
        published: data.attributes.published,
      }

      indexes[lang].push(attributes)
    })

    // sort by published date
    indexes[lang] = indexes[lang].sort(
      (a, b) => +new Date(b.published) - +new Date(a.published)
    )
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.ts.tpl'),
    fileName: `blog/plugin.ts`,
    options: {
      slugs: indexes.en.map((a) => a.slug),
    },
    ssr: true,
  })

  langs.forEach((lang) => {
    this.addPlugin({
      src: resolve(__dirname, 'index.ts.tpl'),
      fileName: `blog/index-${lang}.ts`,
      options: {
        index: indexes[lang],
      },
      ssr: true,
    })
  })
}

export default aceforthModule
