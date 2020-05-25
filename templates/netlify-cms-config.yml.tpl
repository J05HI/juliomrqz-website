<% if (options.isProd) { %>
backend:
  name: github
  repo: juliomrqz/website
  branch: master
  base_url: <%= options.baseURL %>
  auth_endpoint: /api/cms/auth
  site_domain: <%= options.baseURL %>
<% } else { %>
backend:
  name: git-gateway
local_backend: true
<% } %>

publish_mode: editorial_workflow
media_folder: assets/images/content
public_folder: content

collections:
  - name: "posts_en"
    label: 'Posts (English)'
    label_singular: 'Post (English)'
    create: true
    format: 'yaml-frontmatter'
    folder: 'content/blog/en'
    media_folder: /assets/images/content/blog/
    public_folder: blog/
    editor:
      preview: false
    preview_path: "blog/{{fields.slug}}"
    slug: "{{fields.slug}}"
    sortableFields: ['title', 'created', 'published']
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: "Cover", name: "cover", widget: "image"}
      - { label: 'Create at', name: 'created', widget: 'datetime' }
      - { label: 'Published at', name: 'published', widget: 'datetime' }
      - { label: 'Canonical', name: 'canonical', widget: 'string', required: false }
      - { label: 'Body', name: 'body', widget: 'markdown' }

  - name: "posts_es"
    label: 'Posts (Español)'
    label_singular: 'Post (Español)'
    create: true
    format: 'yaml-frontmatter'
    folder: 'content/blog/es'
    media_folder: /assets/images/content/blog/
    public_folder: blog/
    editor:
      preview: false
    preview_path: "es/blog/{{fields.slug}}"
    slug: "{{fields.slug}}"
    sortableFields: ['title', 'created', 'published']
    fields:
      - { label: 'Title', name: 'title', widget: 'string' }
      - { label: 'Slug', name: 'slug', widget: 'string' }
      - { label: 'Description', name: 'description', widget: 'string' }
      - { label: "Cover", name: "cover", widget: "image"}
      - { label: 'Create at', name: 'created', widget: 'datetime' }
      - { label: 'Published at', name: 'published', widget: 'datetime' }
      - { label: 'Canonical', name: 'canonical', widget: 'string', required: false }
      - { label: 'Body', name: 'body', widget: 'markdown' }
