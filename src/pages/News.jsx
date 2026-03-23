import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { getAllPosts, urlFor, categoryLabel, formatDate } from '../lib/sanity'
import ScrollReveal from '../components/ScrollReveal'

const CATEGORIES = [
  { value: 'all',          en: 'All',           ar: 'الكل'         },
  { value: 'legal-update', en: 'Legal Update',  ar: 'تحديث قانوني' },
  { value: 'case-study',   en: 'Case Study',    ar: 'دراسة حالة'   },
  { value: 'firm-news',    en: 'Firm News',     ar: 'أخبار المكتب' },
]

export default function News() {
  const { isAr } = useLanguage()
  const [posts, setPosts]       = useState([])
  const [loading, setLoading]   = useState(true)
  const [filter, setFilter]     = useState('all')

  useEffect(() => {
    getAllPosts().then(data => { setPosts(data); setLoading(false) })
  }, [])

  const filtered = filter === 'all' ? posts : posts.filter(p => p.category === filter)

  return (
    <main>
      {/* Banner */}
      <section className="pt-32 pb-20 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.15) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="section-label">{isAr ? 'المدونة والأخبار' : 'Blog & News'}</span>
          <h1
            className="font-playfair font-700 text-white mt-3 mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            {isAr ? 'رؤى قانونية وأخبار المكتب' : 'Legal Insights & Firm News'}
          </h1>
          <p className="font-outfit text-white/50 text-lg">
            {isAr
              ? 'آخر التحديثات القانونية ودراسات الحالة وأخبار مكتب د. فاتن تميم'
              : 'Latest legal updates, case studies and news from Dr. Faten Tamim Advocates'}
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-10 border-b" style={{ background: '#fff', borderColor: 'rgba(0,0,0,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map(cat => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className="px-5 py-2 rounded-full font-outfit text-[13px] font-600 transition-all duration-200"
                style={{
                  background: filter === cat.value ? 'var(--gold)' : 'var(--warm)',
                  color: filter === cat.value ? 'var(--navy)' : 'var(--text)',
                  border: filter === cat.value ? '1px solid var(--gold)' : '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {isAr ? cat.ar : cat.en}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1,2,3].map(i => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                  <div className="h-52 bg-gray-200" />
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-outfit text-text-muted text-lg">
                {isAr ? 'لا توجد مقالات بعد.' : 'No articles yet.'}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((post, i) => (
                <ScrollReveal key={post._id} delay={i * 80}>
                  <PostCard post={post} isAr={isAr} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function PostCard({ post, isAr }) {
  const title = isAr ? (post.titleAr || post.titleEn) : post.titleEn
  const excerpt = isAr ? (post.excerptAr || post.excerptEn) : post.excerptEn
  const cat = categoryLabel(post.category)

  return (
    <Link
      to={`/news/${post.slug?.current}`}
      className="card-hover block bg-white rounded-2xl overflow-hidden group"
      style={{ border: '1px solid rgba(0,0,0,0.04)' }}
    >
      {/* Cover */}
      <div className="relative overflow-hidden" style={{ height: '220px', background: 'var(--navy)' }}>
        {post.coverImage ? (
          <img
            src={urlFor(post.coverImage).width(600).height(440).url()}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--navy-light)' }}>
            <span className="font-playfair text-gold text-4xl opacity-30">FT</span>
          </div>
        )}
        {/* Category badge */}
        {post.category && (
          <span
            className="absolute top-4 start-4 font-outfit text-[11px] font-600 uppercase tracking-wider px-3 py-1 rounded-full"
            style={{ background: 'rgba(200,151,62,0.92)', color: '#fff' }}
          >
            {isAr ? cat.ar : cat.en}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3 text-text-muted font-outfit text-[12px]">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date, isAr)}
          </span>
          {post.author && (
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          )}
        </div>
        <h3 className="font-playfair font-600 text-navy text-[18px] leading-snug mb-3 group-hover:text-gold transition-colors">
          {title}
        </h3>
        {excerpt && (
          <p className="font-outfit text-text-light text-[14px] leading-relaxed line-clamp-3 mb-4">
            {excerpt}
          </p>
        )}
        <span className="inline-flex items-center gap-1.5 font-outfit text-[13px] font-600 text-gold group-hover:gap-3 transition-all">
          {isAr ? 'اقرأ المزيد' : 'Read More'}
          <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  )
}
