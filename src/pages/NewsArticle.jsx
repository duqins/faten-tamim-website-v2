import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { PortableText } from '@portabletext/react'
import { Calendar, User, ArrowLeft, ArrowRight, Tag } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getPostBySlug, urlFor, categoryLabel, formatDate } from '../lib/sanity'

const ptComponents = {
  block: {
    normal: ({ children }) => (
      <p className="font-outfit text-[16px] leading-relaxed text-text-primary mb-5">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="font-playfair font-700 text-navy mt-10 mb-4 leading-tight" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2rem)' }}>{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-playfair font-600 text-navy mt-8 mb-3 text-xl">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-s-4 border-gold ps-6 my-6 font-playfair italic text-text-light text-[17px] leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-600 text-navy">{children}</strong>,
    em:     ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <span className="underline">{children}</span>,
  },
  types: {
    image: ({ value }) => (
      <figure className="my-8 rounded-2xl overflow-hidden">
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt || ''}
          className="w-full h-auto"
        />
      </figure>
    ),
  },
}

export default function NewsArticle() {
  const { slug } = useParams()
  const { isAr } = useLanguage()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPostBySlug(slug).then(data => { setPost(data); setLoading(false) })
  }, [slug])

  if (loading) return (
    <main className="pt-40 pb-20" style={{ background: '#fff' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-2/3" />
        <div className="h-5 bg-gray-200 rounded w-1/3" />
        <div className="h-64 bg-gray-200 rounded-2xl" />
        <div className="space-y-3 mt-8">
          {[1,2,3,4,5].map(i => <div key={i} className="h-4 bg-gray-200 rounded" />)}
        </div>
      </div>
    </main>
  )

  if (!post) return (
    <main className="pt-40 pb-20 text-center" style={{ background: '#fff' }}>
      <p className="font-outfit text-text-muted text-lg">
        {isAr ? 'المقال غير موجود.' : 'Article not found.'}
      </p>
      <Link to="/news" className="btn-primary mt-6 inline-flex">
        {isAr ? 'العودة للأخبار' : 'Back to News'}
      </Link>
    </main>
  )

  const title   = isAr ? (post.titleAr || post.titleEn)   : post.titleEn
  const body    = isAr ? (post.bodyAr   || post.bodyEn)   : post.bodyEn
  const excerpt = isAr ? (post.excerptAr || post.excerptEn) : post.excerptEn
  const cat     = categoryLabel(post.category)
  const BackIcon = isAr ? ArrowRight : ArrowLeft

  return (
    <main>
      {/* Banner */}
      <section className="pt-32 pb-0 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.15) 0%, transparent 70%)' }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative pb-16">
          {/* Back link */}
          <Link
            to="/news"
            className="inline-flex items-center gap-2 font-outfit text-[13px] text-white/50 hover:text-gold transition-colors mb-8"
          >
            <BackIcon className="w-4 h-4" />
            {isAr ? 'العودة إلى الأخبار' : 'Back to News'}
          </Link>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-5">
            {post.category && (
              <span
                className="font-outfit text-[11px] font-600 uppercase tracking-wider px-3 py-1 rounded-full"
                style={{ background: 'rgba(200,151,62,0.15)', color: 'var(--gold)' }}
              >
                {isAr ? cat.ar : cat.en}
              </span>
            )}
            <span className="flex items-center gap-1.5 font-outfit text-[13px] text-white/45">
              <Calendar className="w-3.5 h-3.5" />
              {formatDate(post.date, isAr)}
            </span>
            {post.author && (
              <span className="flex items-center gap-1.5 font-outfit text-[13px] text-white/45">
                <User className="w-3.5 h-3.5" />
                {post.author}
              </span>
            )}
          </div>

          <h1
            className="font-playfair font-700 text-white leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          >
            {title}
          </h1>

          {excerpt && (
            <p className="font-outfit text-white/50 text-[17px] leading-relaxed mt-5 max-w-2xl">
              {excerpt}
            </p>
          )}
        </div>

        {/* Cover image */}
        {post.coverImage && (
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-t-2xl overflow-hidden" style={{ maxHeight: '480px' }}>
              <img
                src={urlFor(post.coverImage).width(1200).height(600).url()}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </section>

      {/* Article body */}
      <section className="py-16" style={{ background: '#fff' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" dir={isAr ? 'rtl' : 'ltr'}>
          {body && body.length > 0 ? (
            <PortableText value={body} components={ptComponents} />
          ) : (
            <p className="font-outfit text-text-muted text-[15px]">
              {isAr ? 'لا يوجد محتوى بعد.' : 'No content yet.'}
            </p>
          )}

          {/* Back to news */}
          <div className="mt-14 pt-8 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <BackIcon className="w-4 h-4" />
              {isAr ? 'العودة إلى الأخبار' : 'Back to News'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
