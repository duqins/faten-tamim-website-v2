import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Phone, Mail } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../../context/LanguageContext'
import { teamMembers } from '../../data/team'
import ScrollReveal from '../../components/ScrollReveal'

export default function TeamMember() {
  const { slug } = useParams()
  const { isAr } = useLanguage()
  const member = teamMembers.find(m => m.slug === slug)

  if (!member) {
    return (
      <main className="pt-40 pb-20 text-center">
        <h1 className="font-playfair font-700 text-navy text-3xl mb-4">
          {isAr ? 'العضو غير موجود' : 'Member Not Found'}
        </h1>
        <Link to="/about#team" className="btn-primary inline-flex">
          {isAr ? 'العودة للفريق' : 'Back to Team'}
          {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </Link>
      </main>
    )
  }

  const name = isAr ? member.nameAr : member.nameEn
  const role = isAr ? member.roleAr : member.roleEn
  const bio = isAr ? member.bioAr : member.bioEn
  const specialties = isAr ? member.specialtiesAr : member.specialtiesEn
  const education = isAr ? member.educationAr : member.educationEn
  const position = isAr ? member.positionAr : member.positionEn

  const otherMembers = teamMembers.filter(m => m.slug !== slug)

  return (
    <main>
      {/* Banner */}
      <section className="pt-32 pb-20 relative" style={{ background: 'var(--navy)' }}>
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 font-outfit text-[13px] text-white/50 hover:text-gold transition-colors mb-8"
          >
            {isAr ? <ArrowRight className="w-4 h-4 rotate-180" /> : <ArrowLeft className="w-4 h-4" />}
            {isAr ? 'العودة للفريق' : 'Back to Team'}
          </Link>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <img
              src={member.photo}
              alt={name}
              className="w-24 h-24 rounded-2xl object-cover flex-shrink-0"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            />
            <div>
              <span
                className="inline-block font-outfit text-[11px] font-600 uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={{ background: 'rgba(200,151,62,0.15)', color: 'var(--gold)' }}
              >
                {member.expYears} {isAr ? 'سنة خبرة' : 'Years Experience'}
              </span>
              <h1
                className="font-playfair font-700 text-white mb-2"
                style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}
              >
                {name}
              </h1>
              <p className="font-outfit text-gold text-[15px]">{role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20" style={{ background: 'var(--cream)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-6 pb-4 border-b" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
                    {isAr ? 'نبذة شخصية' : 'Biography'}
                  </h2>
                  <div className="space-y-5">
                    {bio.map((para, i) => (
                      <p key={i} className="font-outfit text-text-secondary text-[15px] leading-[1.9]">{para}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="bg-white rounded-2xl p-8" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h2 className="font-playfair font-700 text-navy text-xl mb-5">
                    {isAr ? 'مجالات التخصص' : 'Areas of Specialization'}
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {specialties.map((s, i) => (
                      <span key={i} className="tag-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <ScrollReveal delay={150}>
                {/* Details card */}
                <div className="bg-white rounded-2xl p-6 mb-5" style={{ border: '1px solid rgba(0,0,0,0.04)' }}>
                  <h3 className="font-outfit font-600 text-[11px] uppercase tracking-wider text-text-muted mb-4">
                    {isAr ? 'معلومات مهنية' : 'Professional Info'}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-outfit text-[11px] font-600 text-text-muted uppercase tracking-wider mb-1">
                        {isAr ? 'التعليم' : 'Education'}
                      </div>
                      <div className="font-outfit text-[14px] text-text-primary">{education}</div>
                    </div>
                    <div>
                      <div className="font-outfit text-[11px] font-600 text-text-muted uppercase tracking-wider mb-1">
                        {isAr ? 'المنصب' : 'Position'}
                      </div>
                      <div className="font-outfit text-[14px] text-text-primary">{position}</div>
                    </div>
                    {member.courtsEn && (
                      <div>
                        <div className="font-outfit text-[11px] font-600 text-text-muted uppercase tracking-wider mb-1">
                          {isAr ? 'المحاكم المرخصة' : 'Court Admissions'}
                        </div>
                        <div className="font-outfit text-[14px] text-text-primary">
                          {isAr ? member.courtsAr : member.courtsEn}
                        </div>
                      </div>
                    )}
                    <div>
                      <div className="font-outfit text-[11px] font-600 text-text-muted uppercase tracking-wider mb-1">
                        {isAr ? 'اللغات' : 'Languages'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.languages.map((l, i) => (
                          <span key={i} className="font-outfit text-[13px] text-text-primary bg-warm px-3 py-1 rounded-full">
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="rounded-2xl p-6" style={{ background: 'var(--navy)' }}>
                  <h3 className="font-playfair font-700 text-white text-lg mb-3">
                    {isAr ? 'تواصل معنا' : 'Get in Touch'}
                  </h3>
                  <p className="font-outfit text-white/50 text-[13px] mb-5 leading-relaxed">
                    {isAr
                      ? 'احجز استشارتك الأولى اليوم بشكل سري.'
                      : 'Book your first consultation today in complete confidence.'}
                  </p>
                  <Link to="/contact" className="btn-primary w-full justify-center text-[13px] mb-3">
                    {isAr ? 'احجز استشارة' : 'Book a Consultation'}
                  </Link>
                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <a href="tel:+971525451974" className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors">
                      <Phone className="w-4 h-4" />
                      <span className="font-outfit text-[13px]" dir="ltr">+971 52 545 1974</span>
                    </a>
                    <a href="https://wa.me/971525451974" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white/50 hover:text-green-400 transition-colors">
                      <FaWhatsapp className="w-4 h-4" />
                      <span className="font-outfit text-[13px]">WhatsApp</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Other team members */}
          <div className="mt-16 pt-12 border-t" style={{ borderColor: 'rgba(0,0,0,0.06)' }}>
            <ScrollReveal>
              <h2 className="font-playfair font-700 text-navy text-2xl mb-8">
                {isAr ? 'باقي الفريق' : 'Meet the Rest of the Team'}
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherMembers.map((m, i) => (
                <ScrollReveal key={m.slug} delay={i * 80}>
                  <Link
                    to={`/team/${m.slug}`}
                    className="card-hover block rounded-2xl bg-white overflow-hidden group"
                    style={{ border: '1px solid rgba(0,0,0,0.04)' }}
                  >
                    <div className="flex items-end justify-center overflow-hidden" style={{ height: '240px', background: '#ffffff' }}>
                      <img
                        src={m.photo}
                        alt={isAr ? m.nameAr : m.nameEn}
                        style={{ height: '240px', width: 'auto', maxWidth: '100%', display: 'block' }}
                      />
                    </div>
                    <div className="h-0.5 bg-gold" />
                    <div className="p-4 text-center">
                      <div className="font-playfair font-600 text-navy text-[14px] mb-1 leading-snug">
                        {isAr ? m.nameAr : m.nameEn}
                      </div>
                      <div className="font-outfit text-text-muted text-[12px]">
                        {isAr ? m.roleAr : m.roleEn}
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
