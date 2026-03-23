import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { teamMembers } from '../data/team'
import ScrollReveal from '../components/ScrollReveal'

export default function Team() {
  const { isAr } = useLanguage()

  return (
    <main>
      {/* Banner */}
      <section
        className="pt-32 pb-20 relative"
        style={{ background: 'var(--navy)' }}
      >
        <div className="absolute inset-0 dot-texture pointer-events-none" />
        <div className="absolute top-0 left-0 w-96 h-96 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top left, rgba(200,151,62,0.12) 0%, transparent 70%)' }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative">
          <span className="section-label">{isAr ? 'فريقنا' : 'Our Team'}</span>
          <h1
            className="font-playfair font-700 text-white mt-3 mb-5 leading-tight"
            style={{ fontSize: 'clamp(2.4rem, 4vw, 3.6rem)' }}
          >
            {isAr ? 'محامون متميزون. نتائج استثنائية.' : 'Distinguished Attorneys. Exceptional Results.'}
          </h1>
          <p className="font-outfit text-white/50 text-lg leading-relaxed">
            {isAr
              ? 'تعرف على الفريق القانوني الذي يقف خلف كل قضية نتولاها'
              : 'Meet the legal team behind every case we handle'}
          </p>
        </div>
      </section>

      {/* Team roster */}
      <section className="py-24" style={{ background: 'var(--cream)' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.slug} delay={i * 60}>
                <Link
                  to={`/team/${member.slug}`}
                  className="card-hover flex flex-col sm:flex-row items-stretch rounded-2xl overflow-hidden group bg-white"
                  style={{ border: '1px solid rgba(0,0,0,0.04)' }}
                >
                  {/* Portrait photo */}
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: '200px', minHeight: '220px' }}>
                    <img
                      src={member.photo}
                      alt={isAr ? member.nameAr : member.nameEn}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* Gold accent */}
                  <div className="w-1 flex-shrink-0 hidden sm:block" style={{ background: 'var(--gold)' }} />
                  {/* Info */}
                  <div className="flex-1 p-7 flex flex-col justify-center">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h2 className="font-playfair font-700 text-navy text-2xl leading-snug mb-1">
                          {isAr ? member.nameAr : member.nameEn}
                        </h2>
                        <p className="font-outfit text-[14px]" style={{ color: 'var(--gold-dark)' }}>
                          {isAr ? member.roleAr : member.roleEn}
                        </p>
                      </div>
                      <span
                        className="font-outfit text-[11px] font-600 uppercase tracking-wider px-3 py-1 rounded-full flex-shrink-0"
                        style={{ background: 'rgba(200,151,62,0.1)', color: 'var(--gold-dark)' }}
                      >
                        {member.expYears} {isAr ? 'سنة خبرة' : 'Yrs Experience'}
                      </span>
                    </div>

                    {/* First bio sentence */}
                    <p className="font-outfit text-text-secondary text-[14px] leading-relaxed mb-4 line-clamp-2">
                      {(isAr ? member.bioAr : member.bioEn)[0]}
                    </p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(isAr ? member.specialtiesAr : member.specialtiesEn).slice(0, 4).map((s, j) => (
                        <span
                          key={j}
                          className="font-outfit text-[11px] px-2.5 py-1 rounded-full"
                          style={{ background: 'var(--warm)', color: 'var(--text-secondary)' }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 font-outfit text-[13px] font-600 text-gold group-hover:gap-3 transition-all">
                      {isAr ? 'عرض الملف الكامل' : 'View Full Profile'}
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
