import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getLatestPosts, urlFor, categoryLabel, formatDate } from '../lib/sanity'
import {
  ArrowRight, Phone, Mail, MapPin, Clock, CheckCircle2,
  ChevronDown, Send, Scale, Shield, Briefcase, Building2,
  Landmark, Stethoscope, Gavel
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../data/translations'
import { teamMembers } from '../data/team'
import { services } from '../data/services'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <LatestNews />
      <Contact />
    </main>
  )
}

/* ─── HERO ─── */
function Hero() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)
  const h = tr.hero

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const item = {
    hidden: { opacity: 1, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      className="relative min-h-screen flex flex-col"
      style={{
        background: `linear-gradient(rgba(11,17,32,0.88), rgba(11,17,32,0.88)), url('/picture for background.png') center/cover no-repeat`,
      }}
    >

      {/* Dot texture overlay */}
      <div className="absolute inset-0 dot-texture pointer-events-none" />

      {/* Gold radial gradient hint */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.15) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(200,151,62,0.06) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Tagline pill */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold/30 bg-gold/8 text-gold font-outfit text-[12px] font-600 tracking-[0.12em] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              {h.tagline}
            </span>
          </motion.div>

          {/* Firm name */}
          <motion.div variants={item} className="mb-6">
            <h1
              className="font-playfair font-800 text-white leading-tight"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)' }}
            >
              {h.firmName}
            </h1>
            <div
              className="font-playfair font-400 italic leading-tight mt-1"
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                background: 'linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 60%, var(--gold) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {h.firmSub}
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={item} className="font-outfit text-white/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {h.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-[15px] py-3.5 px-8">
              {h.ctaPrimary}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/services" className="btn-secondary text-[15px] py-3.5 px-8">
              {h.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats bar */}
          <motion.div variants={item} className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { val: '7+', label: isAr ? 'مجالات قانونية' : 'Practice Areas' },
              { val: '15+', label: isAr ? 'سنة خبرة' : 'Years Experience' },
              { val: '5', label: isAr ? 'محامون' : 'Expert Lawyers' },
              { val: '98%', label: isAr ? 'رضا العملاء' : 'Client Satisfaction' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-playfair font-700 text-gold text-2xl mb-1">{s.val}</div>
                <div className="font-outfit text-[12px] text-white/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="font-outfit text-[11px] tracking-widest uppercase">
          {isAr ? 'تمرير للأسفل' : 'Scroll'}
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>

      {/* Marquee bar */}
      <div
        className="absolute bottom-0 left-0 right-0 border-t border-gold/15 py-3 overflow-hidden"
        style={{ background: 'rgba(200,151,62,0.06)' }}
      >
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...h.marqueeItems, ...h.marqueeItems].map((item, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-6 font-outfit text-[11px] font-600 uppercase tracking-[0.12em] text-gold/70"
              >
                {item}
                <span className="w-1 h-1 rounded-full bg-gold/40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── ABOUT ─── */
function About() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)
  const a = tr.about

  return (
    <section className="py-24 lg:py-32" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: decorative visual */}
          <ScrollReveal>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <img
                  src="/about.jpg"
                  alt="Dr. Faten Tamim Office"
                  className="w-full h-full object-cover"
                />
                {/* Subtle dark overlay at bottom for gold strip visibility */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,17,32,0.35) 0%, transparent 50%)' }} />
                {/* Bottom gold strip */}
                <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: 'var(--gold)' }} />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-2xl border-2 border-white"
                style={{ background: 'var(--gold)' }}
              >
                <div className="font-playfair font-800 text-navy text-2xl leading-none">{a.badge1}</div>
                <div className="font-outfit font-600 text-navy text-[10px] uppercase tracking-wider text-center leading-tight mt-1">
                  {isAr ? 'سنة' : 'Years'}
                  <br />
                  {isAr ? 'تميز' : 'Excellence'}
                </div>
              </div>

              {/* Top accent */}
              <div
                className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl flex items-center justify-center"
                style={{ background: 'var(--navy)' }}
              >
                <Scale className="w-7 h-7 text-gold" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: content */}
          <div>
            <ScrollReveal>
              <span className="section-label">{a.label}</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2
                className="font-playfair font-700 text-navy mt-3 mb-6 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
              >
                {a.title}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-outfit text-text-secondary text-[16px] leading-[1.9] mb-5">{a.p1}</p>
              <p className="font-outfit text-text-secondary text-[16px] leading-[1.9] mb-8">{a.p2}</p>
            </ScrollReveal>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {a.values.map((v, i) => (
                <ScrollReveal key={i} delay={300 + i * 80}>
                  <div
                    className="card-hover p-5 rounded-2xl border"
                    style={{
                      background: 'var(--warm)',
                      borderColor: 'rgba(0,0,0,0.04)',
                    }}
                  >
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3" style={{ background: 'rgba(200,151,62,0.12)' }}>
                      <CheckCircle2 className="w-4 h-4 text-gold" />
                    </div>
                    <div className="font-playfair font-600 text-navy text-[15px] mb-1">{v.title}</div>
                    <div className="font-outfit text-text-muted text-[12px] leading-relaxed">{v.desc}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={600}>
              <Link to="/about" className="btn-primary inline-flex">
                {a.learnMore}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── PRACTICE AREAS ─── */
function PracticeAreas() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)
  const s = tr.services

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">{s.label}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="font-playfair font-700 text-navy mt-3 mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
            >
              {s.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-outfit text-text-secondary max-w-xl mx-auto leading-relaxed">
              {s.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Cards grid — show first 6 on homepage */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 6).map((svc, i) => {
            return (
              <ScrollReveal key={svc.slug} delay={i * 80}>
                <Link
                  to={svc.path}
                  className="card-hover block p-7 rounded-2xl bg-white border group"
                  style={{ borderColor: 'rgba(0,0,0,0.04)' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors"
                    style={{ background: 'rgba(200,151,62,0.1)' }}
                  >
                    <svc.Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-playfair font-600 text-navy text-[18px] mb-3 leading-snug">
                    {isAr ? svc.titleAr : svc.titleEn}
                  </h3>
                  <p className="font-outfit text-text-secondary text-[13px] leading-relaxed mb-5">
                    {isAr ? svc.shortDescAr : svc.shortDescEn}
                  </p>
                  <span className="inline-flex items-center gap-2 font-outfit text-[13px] font-600 text-gold group-hover:gap-3 transition-all">
                    {s.learnMore}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Link to="/services" className="btn-primary">
              {s.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ─── TEAM ─── */
function Team() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)
  const t = tr.team

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--navy)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">{t.label}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="font-playfair font-700 text-white mt-3 mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
            >
              {t.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-outfit text-white/45 max-w-xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.slug} delay={i * 80}>
              <Link
                to={`/team/${member.slug}`}
                className="card-hover block rounded-2xl bg-white overflow-hidden group"
              >
                <div className="relative overflow-hidden" style={{ height: '240px', background: '#ffffff' }}>
                  <img
                    src={member.photo}
                    alt={isAr ? member.nameAr : member.nameEn}
                    style={{ height: '240px', width: 'auto', maxWidth: '100%', display: 'block', margin: '0 auto' }}
                  />
                  <span
                    className="absolute top-3 start-3 font-outfit text-[10px] font-600 uppercase tracking-wider px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(200,151,62,0.9)', color: '#fff' }}
                  >
                    {member.expYears} {isAr ? 'سنة' : 'Yrs'}
                  </span>
                </div>
                <div className="h-0.5 bg-gold" />
                <div className="p-5 text-center">
                  <h3 className="font-playfair font-600 text-navy text-[15px] leading-snug mb-1">
                    {isAr ? member.nameAr : member.nameEn}
                  </h3>
                  <p className="font-outfit text-text-muted text-[12px] mb-4 leading-tight">
                    {isAr ? member.roleAr : member.roleEn}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-outfit text-[12px] font-600 text-gold group-hover:gap-2.5 transition-all">
                    {t.viewProfile}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}


/* ─── LATEST NEWS ─── */
function LatestNews() {
  const { lang, isAr } = useLanguage()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getLatestPosts(3).then(data => { setPosts(data); setLoading(false) })
  }, [])

  if (!loading && posts.length === 0) return null

  return (
    <section className="py-24 lg:py-32" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <ScrollReveal>
              <span className="section-label">{isAr ? 'الأخبار والرؤى' : 'News & Insights'}</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-playfair font-700 text-navy mt-3 leading-tight"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}>
                {isAr ? 'آخر المستجدات' : 'Latest Updates'}
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={150}>
            <Link to="/news" className="hidden sm:inline-flex items-center gap-2 font-outfit text-[13px] font-600 text-gold hover:text-gold-dark transition-colors">
              {isAr ? 'عرض الكل' : 'View All'}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-5 space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/3" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => {
              const title = isAr ? (post.titleAr || post.titleEn) : post.titleEn
              const excerpt = isAr ? (post.excerptAr || post.excerptEn) : post.excerptEn
              const cat = categoryLabel(post.category)
              return (
                <ScrollReveal key={post._id} delay={i * 80}>
                  <Link
                    to={`/news/${post.slug?.current}`}
                    className="card-hover block bg-white rounded-2xl overflow-hidden group"
                    style={{ border: '1px solid rgba(0,0,0,0.04)' }}
                  >
                    <div className="relative overflow-hidden" style={{ height: '200px', background: 'var(--navy)' }}>
                      {post.coverImage ? (
                        <img
                          src={urlFor(post.coverImage).width(600).height(400).url()}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--navy-light)' }}>
                          <span className="font-playfair text-gold text-4xl opacity-30">FT</span>
                        </div>
                      )}
                      {post.category && (
                        <span className="absolute top-3 start-3 font-outfit text-[10px] font-600 uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ background: 'rgba(200,151,62,0.9)', color: '#fff' }}>
                          {isAr ? cat.ar : cat.en}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <div className="font-outfit text-[11px] text-text-muted mb-2">{formatDate(post.date, isAr)}</div>
                      <h3 className="font-playfair font-600 text-navy text-[16px] leading-snug mb-2 group-hover:text-gold transition-colors line-clamp-2">
                        {title}
                      </h3>
                      {excerpt && (
                        <p className="font-outfit text-text-light text-[13px] leading-relaxed line-clamp-2">{excerpt}</p>
                      )}
                    </div>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        )}

        <div className="mt-10 text-center sm:hidden">
          <Link to="/news" className="btn-primary inline-flex">
            {isAr ? 'عرض جميع الأخبار' : 'View All News'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── CONTACT ─── */
function Contact() {
  const { lang, isAr } = useLanguage()
  const tr = useT(lang)
  const c = tr.contact
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    user_name: '', user_email: '', user_phone: '', subject: '', message: ''
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        'service_cusdo1k',
        'template_l08eik3',
        formRef.current,
        'BSVkZlqJCjEXVY7KF'
      )
      setStatus('success')
      setFormData({ user_name: '', user_email: '', user_phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const infoCards = [
    {
      Icon: Phone,
      label: c.info.phone,
      value: '971 52 545 1974',
      href: 'tel:+971525451974',
    },
    {
      Icon: Mail,
      label: c.info.email,
      value: 'f.alsulebi@gmail.com',
      href: 'mailto:f.alsulebi@gmail.com',
    },
    {
      Icon: MapPin,
      label: c.info.address,
      value: isAr ? c.info.addressVal : c.info.addressVal,
      href: 'https://maps.app.goo.gl/4ni9iADHJC4anDgN9',
    },
    {
      Icon: Clock,
      label: c.info.hours,
      value: c.info.hoursVal,
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="section-label">{c.label}</span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2
              className="font-playfair font-700 text-navy mt-3 mb-4 leading-tight"
              style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
            >
              {c.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-outfit text-text-secondary max-w-xl mx-auto leading-relaxed">
              {c.subtitle}
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">
                      {c.form.name}
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">
                      {c.form.email}
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">
                      {c.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">
                      {c.form.subject}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-outfit text-[12px] font-600 text-text-secondary mb-2 uppercase tracking-wider">
                    {c.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input resize-none"
                    required
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 text-green-700 font-outfit text-[14px] bg-green-50 p-3 rounded-xl">
                    <CheckCircle2 className="w-5 h-5" />
                    {c.form.success}
                  </div>
                )}
                {status === 'error' && (
                  <div className="text-red-600 font-outfit text-[14px] bg-red-50 p-3 rounded-xl">
                    {c.form.error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center py-4 text-[15px]"
                >
                  {status === 'sending' ? c.form.sending : c.form.submit}
                  {status !== 'sending' && <Send className="w-4 h-4" />}
                </button>
              </form>
            </ScrollReveal>
          </div>

          {/* Info + map */}
          <div className="lg:col-span-2 space-y-5">
            <ScrollReveal delay={200}>
              {infoCards.map(({ Icon, label, value, href }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-2xl mb-4"
                  style={{ background: 'var(--warm)', border: '1px solid rgba(0,0,0,0.04)' }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(200,151,62,0.12)' }}
                  >
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-outfit text-[11px] font-600 uppercase tracking-wider text-text-muted mb-0.5">
                      {label}
                    </div>
                    {href ? (
                      <a href={href} className="font-outfit text-[14px] text-text-primary hover:text-gold transition-colors" dir="ltr">
                        {value}
                      </a>
                    ) : (
                      <span className="font-outfit text-[14px] text-text-primary">{value}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/971525451974"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl transition-all hover:opacity-90"
                style={{ background: '#25D366' }}
              >
                <FaWhatsapp className="w-6 h-6 text-white" />
                <span className="font-outfit font-600 text-white text-[14px]">
                  {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </span>
              </a>
            </ScrollReveal>

          </div>
        </div>

        {/* Full-width map */}
        <ScrollReveal delay={300}>
          <div className="rounded-2xl overflow-hidden mt-10" style={{ height: '480px' }}>
            <iframe
              src="https://www.google.com/maps?cid=5386227777658469374&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
