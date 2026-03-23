import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'q5qqwix8',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
  token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export const getAllPosts = () =>
  client.fetch(
    `*[_type == "news"] | order(date desc) {
      _id, titleEn, titleAr, slug, date, author, category, coverImage, excerptEn, excerptAr
    }`
  )

export const getLatestPosts = (count = 3) =>
  client.fetch(
    `*[_type == "news"] | order(date desc) [0...$count] {
      _id, titleEn, titleAr, slug, date, author, category, coverImage, excerptEn, excerptAr
    }`,
    { count: count - 1 }
  )

export const getPostBySlug = (slug) =>
  client.fetch(
    `*[_type == "news" && slug.current == $slug][0] {
      _id, titleEn, titleAr, slug, date, author, category, coverImage, bodyEn, bodyAr, excerptEn, excerptAr
    }`,
    { slug }
  )

export const categoryLabel = (cat) => {
  const map = {
    'legal-update': { en: 'Legal Update', ar: 'تحديث قانوني' },
    'case-study':   { en: 'Case Study',   ar: 'دراسة حالة'  },
    'firm-news':    { en: 'Firm News',    ar: 'أخبار المكتب' },
  }
  return map[cat] || { en: cat, ar: cat }
}

export const formatDate = (dateStr, isAr = false) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString(isAr ? 'ar-AE' : 'en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}
