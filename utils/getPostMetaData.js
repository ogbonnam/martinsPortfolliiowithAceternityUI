const fs = require('fs')
import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'


export default function getPostData(basePath) {
    const folder = basePath + '/'
    const files = readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.mdx'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const fileContents = readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        return {
            title: matterResult.data.title,
            summary: matterResult.data.summary,
            featured: matterResult.data.featured,
            slug: filename.replace('.mdx', '')
        }
    })
    return posts
}