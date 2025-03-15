import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

// Configuration
const newsDirectory = path.join(process.cwd(), 'src/content/news')
const announcementsDirectory = path.join(process.cwd(), 'src/content/announcements')

// Helper to read files from a directory
function getFilesFromDir(dir) {
  if (!fs.existsSync(dir)) {
    return []
  }
  return fs.readdirSync(dir).filter(file => file.endsWith('.mdx'))
}

// Get all news/announcements with frontmatter
export function getAllContentForType(contentType) {
  const directory = contentType === 'news' ? newsDirectory : announcementsDirectory
  const files = getFilesFromDir(directory)
  
  const allContent = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    
    return {
      slug,
      ...data,
    }
  })

  // Sort by date
  return allContent.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Get all news
export function getAllNews() {
  return getAllContentForType('news')
}

// Get all announcements
export function getAllAnnouncements() {
  return getAllContentForType('announcements')
}

// Get a single content item by slug
export async function getContentBySlug(slug, contentType) {
  const directory = contentType === 'news' ? newsDirectory : announcementsDirectory
  const fullPath = path.join(directory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  
  const mdxSource = await serialize(content)
  
  return {
    slug,
    content: mdxSource,
    ...data,
  }
}
