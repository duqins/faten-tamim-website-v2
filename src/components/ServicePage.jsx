import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, CheckCircle2, ChevronDown, FileText } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'
import { services } from '../data/services'
import ScrollReveal from './ScrollReveal'

export default function ServicePage({ data }) {
  const { isAr } = useLanguage()

  const title = isAr ? data.titleAr : data.titleEn
  const bannerDesc = isAr ? data.bannerDescAr : data.bannerDescEn
  const sections = isAr ? data.sectionsAr : data.sectionsEn
  const outcomes = isAr ? data.outcomesAr : data.outcomesEn
  const process = isAr ? data.processAr : data.processEn
  const documents = isAr ? data.documentsAr : data.documentsEn
  const fees = isAr ? data.feesAr : data.feesEn
  const faqs = isAr ? data.faqsAr : data.faqsEn

  // Related services (excluding current)
  const related = services.filter(s => s.slug !== data.slug)

  return (
    <main>
      {/* Banner */}
      <section
        className="relative flex items-end"
        style={{
          minHeight: '520px',
          paddingTop: '160px',
          paddingBottom: '80px',
          background: data.bgImage
            ? `linear-gradient(rgba(11,17,32,0.72), rgba(11,17,32,0.72)), url('${data.bgImage}') center/cover no-repeat`
            : 'var(--navy)',
        }}
      >
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.15) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'rgba(200,151,62,0.15)' }}>
                <data.Icon className="w-5 h-5 text-gold" />
              </div>
              <span className="section-label">{isAr ? 'مجالات الممارسة' : 'Practice Areas'}</span>
            </div>
            <h1
              className="font-playfair font-700 text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.6rem, 4.5vw, 4rem)' }}
            >
              {title}
            </h1>
            <p className="font-outfit text-white/55 text-[18px] leading-relaxed max-w-2xl">{bannerDesc}</p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-16" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-12 gap-10 ${isAr ? 'lg:flex-row-reverse' : ''}`}>
            {/* Main content: 8/12 */}
            <div className="lg:col-span-8 space-y-12">
              {/* Content sections */}
              {sections.map((sec, si) => (
                <ScrollReveal key={si} delay={si * 60}>
                  <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                    <h2 className="font-playfair font-700 text-navy text-xl mb-5 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                      {sec.heading}
                    </h2>
                    <ul className="space-y-3">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                          <span className="font-outfit text-[14px] text-text-secondary leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}

              {/* Key Outcomes */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-5 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {isAr ? 'النتائج الرئيسية' : 'Key Outcomes'}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {outcomes.map((o, i) => (
                      <span key={i} className="tag-pill">{o}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Our Process */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-8 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {isAr ? 'منهجيتنا' : 'Our Process'}
                  </h2>
                  <div className="space-y-8">
                    {process.map((step, i) => (
                      <div key={i} className="process-step" data-step={i + 1}>
                        <h3 className="font-playfair font-600 text-navy text-[16px] mb-2">{step.title}</h3>
                        <p className="font-outfit text-text-secondary text-[14px] leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Required Documents */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-5 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {isAr ? 'المستندات المطلوبة' : 'Required Documents'}
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {documents.map((doc, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <FileText className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="font-outfit text-[13px] text-text-secondary">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Fees */}
              <ScrollReveal>
                <div className="rounded-2xl p-8" style={{ background: 'var(--navy)', border: '1px solid rgba(200,151,62,0.15)' }}>
                  <h2 className="font-playfair font-700 text-white text-xl mb-4">
                    {isAr ? 'الرسوم والتسعير' : 'Fees & Pricing'}
                  </h2>
                  <p className="font-outfit text-white/60 text-[14px] leading-relaxed">{fees}</p>
                  <div className="mt-5">
                    <Link to="/contact" className="btn-primary inline-flex text-[13px]">
                      {isAr ? 'استشر مجانًا' : 'Get a Free Consultation'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>

              {/* FAQs */}
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-6 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {isAr ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <FAQItem key={i} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar: 4/12 */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-5">
              {/* Book consultation CTA */}
              <div className="rounded-2xl p-7" style={{ background: 'var(--navy)' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: 'rgba(200,151,62,0.15)' }}>
                  <data.Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-playfair font-700 text-white text-xl mb-3">
                  {isAr ? 'احجز استشارة' : 'Book a Consultation'}
                </h3>
                <p className="font-outfit text-white/50 text-[13px] leading-relaxed mb-6">
                  {isAr
                    ? 'تحدث إلى أحد محامينا المتخصصين في إطار سري كامل.'
                    : 'Speak with one of our specialist attorneys in complete confidence.'}
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center text-[13px]">
                  {isAr ? 'تواصل معنا' : 'Get in Touch'}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Quick contact */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  <a href="tel:+971525451974" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors">
                    <Phone className="w-4 h-4" />
                    <span className="font-outfit text-[13px]" dir="ltr">+971 52 545 1974</span>
                  </a>
                  <a href="https://wa.me/971525451974" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors">
                    <FaWhatsapp className="w-4 h-4" />
                    <span className="font-outfit text-[13px]">WhatsApp</span>
                  </a>
                  <a href="mailto:f.alsulebi@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-gold transition-colors">
                    <Mail className="w-4 h-4" />
                    <span className="font-outfit text-[13px]">f.alsulebi@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Related services */}
              <div className="rounded-2xl p-6 bg-white" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                <h3 className="font-outfit font-600 text-[11px] uppercase tracking-wider text-text-muted mb-4">
                  {isAr ? 'خدمات أخرى' : 'Other Services'}
                </h3>
                <div className="space-y-2">
                  {related.map(svc => (
                    <Link
                      key={svc.slug}
                      to={svc.path}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(200,151,62,0.1)' }}>
                        <svc.Icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="font-outfit text-[13px] text-text-secondary group-hover:text-navy transition-colors leading-tight">
                        {isAr ? svc.titleAr : svc.titleEn}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border rounded-xl overflow-hidden" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between gap-4 p-5 text-start hover:bg-cream transition-colors"
      >
        <span className="font-playfair font-600 text-navy text-[15px] leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-gold flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="font-outfit text-text-secondary text-[14px] leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  )
}
