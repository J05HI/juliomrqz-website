import MarkdownIt from 'markdown-it'

export const renderMarkdown = (source: string): string => {
  const md = new MarkdownIt({
    linkify: true,
    breaks: true,
    html: true,
  })

  md.renderer.rules.table_open = function () {
    return '<div class="table-responsive"><div class="table-container"><table class="table">'
  }

  md.renderer.rules.table_close = function () {
    return '</table></div></div>'
  }

  md.use(require('markdown-it-attrs'))
  md.use(require('markdown-it-inline-comments'))
  md.use(require('markdown-it-link-attributes'), [
    {
      pattern: /^https:\/\/marquez.co/,
      attrs: {
        class: 'internal-link',
      },
    },
    {
      pattern: /^https:\/\/www.bazzite.com/,
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    },
    {
      pattern: /^https:\/\/statusfy.co/,
      attrs: {
        target: '_blank',
        rel: 'noopener',
      },
    },
    {
      pattern: /^https?:\/\//,
      attrs: {
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    },
  ])
  md.use(require('markdown-it-prism'), {})
  md.use(require('markdown-it-github-headings'), {
    prefix: 'content-',
    linkIcon: '#',
  })
  md.use(require('markdown-it-mathjax-svg'), {
    mathServiceUrl: 'https://render.githubusercontent.com/render/math?math=',
  })

  return md.render(source)
}
