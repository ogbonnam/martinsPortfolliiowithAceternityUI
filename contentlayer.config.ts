// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',

  fields: {
      title: { type: 'string', required: true },
      summary: { type: 'string', required: true },
      featured: { type: 'boolean', required: false },
      draft: { type: 'boolean', required: false },
      lastmod: { type: 'string', required: false },
      date: { type: 'date', required: true },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  },
}))

export default makeSource({ contentDirPath: 'data/blog', documentTypes: [Post] })